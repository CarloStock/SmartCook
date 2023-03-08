# Object detection

The object detection uses the RCNN models. The script uses OpenCV and PyTorch. To install the dependencies run

> pip install python-opencv, torch, torchvision

To run the object detection, call

> python detect.py -i \<path to input image> -m \<min input size for RCNN network>

The larger the min input size for the RCNN network, the more precise the object detection is. 1024 is recommended, but can be lowered on low performance hardware.

This script gives 2 outputs, the bounding boxes (boxes), and the labels for each of the bounding boxes (detected_images).


