import os
import re

def remove_github_commit_markers(file_path):
    """
    Remove GitHub commit markers (<<<<<<< HEAD, =======, >>>>>>>) from a file
    """
    try:
        with open(file_path, 'r', encoding='utf-8') as file:
            content = file.read()
        
        # Pattern to match GitHub conflict markers
        pattern = r'<<<<<<< HEAD\s*(.*?)\s*=======\s*(.*?)\s*>>>>>>> [a-f0-9]+'
        
        # Check if file contains conflict markers
        if re.search(pattern, content, flags=re.DOTALL):
            # Replace with the content from HEAD (first capture group)
            cleaned_content = re.sub(pattern, r'\1', content, flags=re.DOTALL)
            
            # Write cleaned content back to file
            with open(file_path, 'w', encoding='utf-8') as file:
                file.write(cleaned_content)
            
            print(f"Cleaned: {file_path}")
            return True
        else:
            print(f"No conflicts found: {file_path}")
            return False
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def process_tsx_files(directory='.'):
    """
    Process all .tsx files in the given directory and its subdirectories
    """
    tsx_files = []
    
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith('.tsx'):
                tsx_files.append(os.path.join(root, file))
    
    print(f"Found {len(tsx_files)} .tsx files in current directory")
    
    success_count = 0
    cleaned_count = 0
    
    for file_path in tsx_files:
        result = remove_github_commit_markers(file_path)
        if result is not False:  # Only count if no error occurred
            success_count += 1
            if result is True:  # Only count if file was actually cleaned
                cleaned_count += 1
    
    print(f"\n=== Processing Complete ===")
    print(f"Successfully processed: {success_count}/{len(tsx_files)} files")
    print(f"Files cleaned: {cleaned_count}")
    print(f"Files already clean: {success_count - cleaned_count}")
    print(f"Current directory: {os.path.abspath(directory)}")

if __name__ == "__main__":
    # Always use current directory
    current_dir = '.'
    print(f"Processing .tsx files in current directory: {os.path.abspath(current_dir)}")
    process_tsx_files(current_dir)