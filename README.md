# concierge

A Generative AI tool that analyzes meeting recordings to extract key insights, track action items and generate context-aware, audience-specific summaries. Streamline collaboration and reduce unnecessary admin work with Concierge today! 

## Quickstart

You will need an internet connection, Docker and `k3d` in order to run the lightweight `k3s` Kubernetes distribution powering Concierge.

1. Execute the following command to initialize the Kubernetes control and data planes:

    > ``k3d cluster create --config cluster/k3d-config.yaml``

1. Confirm healthy status of the control plane and other important Kubernetes services using the `kubectl` CLI:

    > ``kubectl cluster-info``

1. Build a Linux image with ffmpeg installed to support the `video-to-audio` service and import this image into `k3d`:

    > ``docker build -t video-to-audio -f Dockerfiles/ffmpeg.Dockerfile .``
    > ``k3d image import video-to-audio -c cluster-concierge``