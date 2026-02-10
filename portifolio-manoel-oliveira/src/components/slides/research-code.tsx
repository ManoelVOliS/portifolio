import { FileIcon, TerminalSquare } from "lucide-react"

export function ResearchCodeSlide() {
  const pythonCode = `
# Processo No: BR512024002862-5  
import os
import math
import re

def preprocess(data):
    singleLineComments = r'\\/\\/.*'
    regularExpression = re.compile(singleLineComments)
    processedData = re.sub(regularExpression, '', data)

    unnecessaryCharacters = r'[\\r\\n\\t;()\\.{\\}\\'|,"]'
    regularExpression = re.compile(unnecessaryCharacters)
    processedData = re.sub(regularExpression, ' ', processedData)

    variable = '(var|let|const)'
    regularExpression = re.compile(variable)
    processedData = re.sub(regularExpression, '', processedData)

    multilineComments = r'\\/\\*.*?\\*\\/'
    regularExpression = re.compile(multilineComments)
    processedData = re.sub(regularExpression, '', processedData)

    operators = r'([\\+\\-<>\\\\%&|\\!=]+)'
    regularExpression = re.compile(operators)
    processedData = re.sub(regularExpression, r'\\1', processedData)

    extraSpaces = r'  +'
    regularExpression = re.compile(extraSpaces)
    processedData = re.sub(regularExpression, ' ', processedData).strip()

    processedData = processedData.lower().split(' ')

    return processedData

def buildDatabase(files):
    database = []
    filteredFiles = []

    for file in files:
        extension = os.path.splitext(file)[1].lower()
        if extension == EXTENSION:
            
            print(file)
            filteredFiles.append(file)

            # Caminho simplificado para demonstração
            with open(os.path.join(folder, file), 'r', encoding='latin-1') as arquivo:
                data = arquivo.read()

            tokens = preprocess(data)

            bagOfWords = {}

            for token in tokens:
                key = '$' + token
                if key in bagOfWords:
                    bagOfWords[key] += 1
                else:
                    bagOfWords[key] = 1

            database.append(bagOfWords)

    return database, filteredFiles

def euclideanDistance(document1, document2):
    distance = 0

    for key, value in document1.items():
        if key in document2:
            diff = value - document2[key]
        else:
            diff = value
        distance += diff * diff

    return math.sqrt(distance)

def copyFinder(database, filteredFiles, outputFile):
    with open(outputFile, "w") as reportFile:
        for i in range(len(database)):
            document1 = database[i]
            report = []

            for j in range(len(database)):
                document2 = database[j]

                if i != j:
                    distance = euclideanDistance(document1, document2)
                    report.append([distance, filteredFiles[j]])

            report.sort(key=lambda x: x[0])

            reportString = f'\\n-----------REPORT------------\\n\\nFile: {filteredFiles[i]}\\n'

            for line in report:
                newLine = f'{line[0]:.4f}\\t|{line[1]}\\n'

                if line[0] == 0.0:
                    newLine = 'COPY\\t|\\t' + newLine
                elif line[0] <= 2.0:
                    newLine = 'WARNING\\t|\\t' + newLine
                else:
                    newLine = 'CHECKED\\t|\\t' + newLine

                reportString += newLine

            reportFile.write(reportString)
            reportFile.write("\\n")  

    print(f"Report generated successfully: {outputFile}")

# Configuração da execução
folder = "/database/scripts"
EXTENSION = ".js"

files = os.listdir(folder)
database, filteredFiles = buildDatabase(files)
outputFile = "reportArray_2020.1.txt"

copyFinder(database, filteredFiles, outputFile)`

  return (
    <div className="w-full h-full flex items-center justify-center p-0 md:p-2">
      {/* 1. Card Principal */}
      <div className="w-full max-w-3xl h-full max-h-[28rem] flex flex-col rounded-xl border border-zinc-800 bg-zinc-950 shadow-2xl overflow-hidden">
        
        {/* Cabeçalho Fixo */}
        <div className="flex items-center justify-between border-b border-zinc-800 bg-zinc-900/50 px-4 py-3 shrink-0">
             <div className="flex items-center gap-2 text-zinc-400">
               <FileIcon className="h-4 w-4 text-blue-400" />
               <span className="text-xs font-mono">copyFinder.py</span>
             </div>
             <div className="flex items-center gap-2 text-zinc-500 text-[10px]">
                <TerminalSquare className="h-3 w-3" />
                <span>Python 3.11</span>
             </div>
        </div>

        {/* 2. Área de Rolagem com Stop Propagation */}
        <div 
          className="flex-1 overflow-y-auto bg-zinc-950/80 p-4 cursor-text scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent"
          onPointerDown={(e) => e.stopPropagation()}
        >
           <div className="text-zinc-300 text-xs sm:text-sm font-mono leading-relaxed whitespace-pre font-ligatures-none">
             {pythonCode}
           </div>
        </div>
        
      </div>
    </div>
  )
}