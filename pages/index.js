export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#000',
      color: '#fff',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    }}>
      <h1 style={{ fontSize: '4rem', margin: '0' }}>Hello World</h1>
      <p style={{ fontSize: '1.5rem', marginTop: '1rem', color: '#888' }}>
        Welcome to Next.js on Vercel
      </p>
    </div>
  )
}
