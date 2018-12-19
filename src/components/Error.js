import React from 'react'

const ErrorPage = ({ children }) => {
  const dummyPageStyle = {
    page: {
      zIndex: -1,
      height: '80vh',
      width: '100%',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },

    text: {
      display: 'inline-block',
      borderRight: '1px solid rgba(0, 0, 0,.3)',
      margin: 0,
      marginRight: 20,
      padding: '10px 23px 10px 0',
      fontSize: '24px',
      fontWeight: 500,
      verticalAlign: 'top',
    },
    dummyContent: {
      fontSize: 12,
      display: 'inline-block',
      textAlign: 'left',
      lineHeight: 2,
      height: 49,
      verticalAlign: 'middle',
      marginTop: -30,
    },
  }
  return (
    <div style={dummyPageStyle.page}>
      <div style={{ height: 150 }}>
        <h1 style={dummyPageStyle.text}>project goals</h1>
        <p style={dummyPageStyle.dummyContent}>
          website: <strong>"gib me data i gib you finished webpage"</strong>
          <br />
          you: "ok. ╮(. ❛ ᴗ ❛.) ╭"
          <br />
          website: . . .. ...ᕕ( ᐛ )ᕗ
          <br />
          you: <span style={{ fontSize: '2em' }}>[</span> ʕ •ᴥ•ʔ{' '}
          <span style={{ fontSize: '2em' }}>]</span>╯ʳᵃʷʳʳʳ__ _へ__(‾◡◝ )>
        </p>
      </div>
      <div>{children}</div>
    </div>
  )
}

export default ErrorPage
