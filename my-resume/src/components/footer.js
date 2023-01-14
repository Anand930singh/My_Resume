import React from 'react'

function footer() {
  return (
    <div className='footer'>
      <div className='copyright'>Copyright @ - Anand Kumar Singh</div>
      <div className='footer_contacts'>
        <div>
            <div className='heading'>- SOCIAL</div>
            <div>
                <a href='/home'>Linkedin</a><br/>
                <a href='/home'>Facebook</a><br/>
                <a href='/home'>Twitter</a>
            </div>
        </div>
        <div>
        <div className='heading'>- CONTACTS</div>
        <div> anand2002king@gmail.com<br/>
        123-123-1234</div>
        </div>
      </div>
    </div>
  )
}

export default footer
