import players from '../Tests/data'

export default function index() {
  return (
    <main className="flex min-h-screen flex-col items-baseline justify-between p-24">
      <div className="flex flex-wrap -mx-4">
        {players.map((player, index) => (
          <div key={index} className="pl-20 pt-4 mt-10 justify-center">
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <img className="w-96 h-96" src={player.image} alt={player.name} />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{player.name}</div>
                <p className="text-gray-700 text-base">{player.description}</p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <div className="flex flex-wrap">
                  {player.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
