'use client'

interface CardProps{
  children: ReactNode,
}

function Card ({children}: CardProps){
  return (
    <div className="h-40 w-40 bg-gray-800 rounded-lg transition-transform duration-300 hover:scale-105 shadow-lg">
      <div className="p-2"> 
          {children}    
      </div>
    </div>
  );
}

export default Card;
