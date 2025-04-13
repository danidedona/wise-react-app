import os
import sys

def rename_images_in_folder(folder_path):
    # Supported image extensions
    image_extensions = ['.jpg', '.jpeg', '.png', '.webp', '.gif']

    # Ensure the folder exists
    if not os.path.isdir(folder_path):
        print(f"Error: '{folder_path}' is not a valid directory.")
        return

    # Get all image files
    files = [
        f for f in os.listdir(folder_path)
        if os.path.isfile(os.path.join(folder_path, f)) and
        os.path.splitext(f)[1].lower() in image_extensions
    ]

    # Sort files alphabetically
    files.sort()

    # Rename files to numbered names
    for i, filename in enumerate(files, start=1):
        ext = os.path.splitext(filename)[1].lower()
        new_name = f"{i}{ext}"
        src = os.path.join(folder_path, filename)
        dst = os.path.join(folder_path, new_name)

        print(f"Renaming: {filename} → {new_name}")
        os.rename(src, dst)

    print("\nDone renaming all images!")

# Entry point
if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python rename_images.py /path/to/your/folder")
    else:
        folder_path = sys.argv[1]
        rename_images_in_folder(folder_path)
