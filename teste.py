import pytesseract
from PIL import Image
import io

# Defina o caminho para o executável do Tesseract (se necessário)
pytesseract.pytesseract.tesseract_cmd = r'C:\Program Files\Tesseract-OCR\tesseract.exe'

def ocr_image(image_path):
    img = Image.open(image_path)
    text = pytesseract.image_to_string(img)
    return text

# Caminho para a imagem que você deseja fazer OCR
image_path = 'D:/new.png'

# Realiza o OCR na imagem e obtém o texto extraído
extracted_text = ocr_image(image_path)

# Caminho para o arquivo de saída onde o texto será salvo
output_file_path = 'texto_extraido.txt'

# Salva o texto extraído em um arquivo de texto
with io.open(output_file_path, 'w', encoding='utf-8') as file:
    file.write(extracted_text)

print(f'Texto extraído salvo em "{output_file_path}"')

