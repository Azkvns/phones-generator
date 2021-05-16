# Генератор контактов с номерами телефонов.

Выход в формате **.vcf**  
В параметрах **outputDir**, **numbersCount**, **mask**  
Mask в формате **+7-999-xxxxxxx**, где **x** - место для замены

Установка зависимостей - `npm install`  
Билд - `npm run build`

или если глобально стоит **tsc CLI**  
`tsc --project tsconfig.json`

Запуск - `node dist/index.js ./outputDir 999 +7-999-xxxxxxx`
