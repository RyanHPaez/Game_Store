const React = require('react')
const Def = require('../default')

function new_form () {
    return (
        <Def>
          <main>
            <h1>Add a Review</h1>
            <form method="POST" action="/games">
                <div className='form-group'>
                    <label htmlFor="name">Game Name</label>
                    <input className='form-control' id="name" name="name" required />
                </div>
                <div className='form-group'>
                    <label htmlFor="pic">Game Picture</label>
                    <input className='form-control' id="pic" name="pic" />
                </div>
                <div className='form-group'>
                    <label htmlFor="genre">Genre</label>
                    <input className='form-control' id="city" name="genre" />
                </div>
                <div className='form-group'>
                    <label htmlFor="state">state</label>
                    <input className='form-control' id="state" name="state" />
                </div>
                <div className='form-group'>
                    <label htmlFor="cuisines">Cuisines</label>
                    <input className='form-control' id="cuisines" name="cuisines" required />
                </div>
                <input className="btn btn-primary" type="submit" value="Add Place" />

                <div className="form-group">
                    <label for="founded">Founded Year</label>
                    <input type="number" className="form-control" id="founded" name="founded" value={new Date().getFullYear()}/>
                </div>

            </form>

          </main>
        </Def>
    )
}

module.exports = new_form