type IconProps = { size?: number; className?: string }

const techImageMap: Record<string, string> = {
  'PHP': 'php.png',
  'Node.js': 'nodejs.png',
  'JavaScript': 'javascript.png',
  'React JS': 'react.png',
  'MySQL': 'mysql.png',
  'Python': 'python.png',
  'FastAPI': 'fastapi.png',
  'Flutter': 'flutter.png',
  'SQL Server': 'sqlServer.png',
  'SQLite': 'sqlLite.png',
  '.NET Core': 'netCore.png',
  'Express.js': 'expressjs.png',
  'React Native': 'reactNative.png',
  'TypeScript': 'typeScript.png',
  'Laravel': 'laravel.png',
}

export function SkillIcon({ name, size = 32, className = '' }: { name: string } & IconProps) {
  const imageName = techImageMap[name]
  
  if (imageName) {
    const imageUrl = new URL(`../../assets/techimages/${imageName}`, import.meta.url).href
    return (
      <img 
        src={imageUrl} 
        alt={name} 
        width={size} 
        height={size} 
        className={`object-contain transition-transform group-hover:scale-110 ${className}`} 
        onError={(e) => {
          // If image fails to load, hide it
          e.currentTarget.style.display = 'none'
        }}
      />
    )
  }

  return null
}
