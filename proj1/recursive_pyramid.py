import numpy as np
import skimage as sk
import time
from pathlib import Path
from skimage import io as skio
from skimage import img_as_ubyte    

# more easily track time taken
start = time.time()

def crop_border(img, percent=0.01):
    h, w = img.shape[:2]
    crop_h, crop_w = int(h * percent), int(w * percent)
    return img[crop_h:h-crop_h, crop_w:w-crop_w]

def compute_ncc(a, b):
    """Normalized cross-correlation of two flattened images"""
    a = crop_border(a, .15)
    b = crop_border(b, .15)
    a_flat = a.flatten()
    b_flat = b.flatten()
    return (a_flat / np.linalg.norm(a_flat)) @ (b_flat / np.linalg.norm(b_flat))

def align_recursive(ref, target, depth=3):
    coarse_window = 5
    if depth == 0:  # coarsest level
        best_disp, best_score = np.array([0,0]), -np.inf
        for i in range(-coarse_window, coarse_window+1):
            for j in range(-coarse_window, coarse_window+1):
                shifted = np.roll(target, shift=(i,j), axis=(0,1))
                score = compute_ncc(ref, shifted)
                if score > best_score:
                    best_score, best_disp = score, np.array([i,j])
        return np.roll(target, shift=tuple(best_disp), axis=(0,1)), best_disp

    # downscale by scale
    scale = 0.5
    ref_small = sk.transform.rescale(ref, scale)
    target_small = sk.transform.rescale(target, scale)

    # Recursive alignment at smaller scale
    _, disp_small = align_recursive(ref_small, target_small, depth-1)

    # Scale displacement to current level
    disp_est = (disp_small / scale).astype(int)

    # Refine with a small +-3 pixel window at current resolution
    best_disp, best_score = disp_est.copy(), -np.inf
    for i in range(disp_est[0]-3, disp_est[0]+4):
        for j in range(disp_est[1]-3, disp_est[1]+4):
            shifted = np.roll(target, shift=(i,j), axis=(0,1))
            score = compute_ncc(ref, shifted)
            if score > best_score:
                best_score, best_disp = score, np.array([i,j])

    return np.roll(target, shift=tuple(best_disp), axis=(0,1)), best_disp #np.roll(target, shift=tuple(best_disp), axis=(0,1))
# read in the image
im = skio.imread("tobolsk.jpg")

# compute the height of each part (just 1/3 of total)
height = im.shape[0] // 3

# separate color channels
b = im[:height]
g = im[height: 2*height]
r = im[2*height: 3*height]

#crop and convert to float
b = crop_border(b)
b = sk.img_as_float(b)

g = crop_border(g)
g = sk.img_as_float(g)

r = crop_border(r)
r = sk.img_as_float(r)


bg, g_best_disp = align_recursive(b, g, 5)
gr, r_best_disp = align_recursive(bg, r, 5)
print(bg.shape)
# align the images
# functions that might be useful for aligning the images include:
# np.roll, np.sum, sk.transform.rescale (for multiscale)
print(g_best_disp, r_best_disp)
# create a color image
im_out = np.dstack((gr, bg, b))
print(im_out.shape)

im_out_uint8 = img_as_ubyte(im_out)  # converts float [0,1] -> uint8 [0,255]
# save the image
fname = 'out_fname.jpg'
skio.imsave(fname, im_out_uint8)

end = time.time()
print(f"Elapsed time: {end - start:.3f} seconds")

# display the image
skio.imshow(im_out)
skio.show()
