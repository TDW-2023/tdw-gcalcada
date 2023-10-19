const players = require('./data.js') // Importa os dados dos jogadores
const fs = require('fs') // Para manipulação de ficheiros

test('Gerar dados dos jogadores ', () => {
  const cards = players
    .map(
      (player) => `
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
     
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">${player.name}</div>
        <p class="text-gray-700 text-base">${player.description}</p>
      </div>
      <div class="px-6 pt-4 pb-2">
        ${player.tags
          .map(
            (tag) => `
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">${tag}</span>
        `,
          )
          .join('')}
      </div>
    </div>
  `,
    )
    .join('')

  // grava num ficheiro html
  const html = `
    <main class="flex min-h-screen flex-col items-baseline justify-between p-24">
      ${cards}
    </main>
  `

  fs.writeFileSync('output.html', html)
})
