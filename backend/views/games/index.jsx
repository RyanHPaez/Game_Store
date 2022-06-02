const React = require('react')
const Def = require('../default')


function index (data) {
    let gamesFormatted = ((games) => {
      return (
        <div className='col-sm-6'>
            <h2>
              <a href={`./games/${game.title}`} >
                {game.title}
              </a>
            </h2>
          <p className='text-left'>
              {game.title}
          </p>
         
        </div>
      )
    })
    return (
      <Def>
          <main>
              <h1>Games</h1>
              <div className='row'>
              {gamesFormatted}
              </div> 
          </main>
      </Def>
  )
  }
  module.exports = index