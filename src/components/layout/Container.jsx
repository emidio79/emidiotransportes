function Container({ children, className = '' }) {
  return (
    <div className={`mx-auto w-[min(1140px,calc(100%-40px))] ${className}`}>
      {children}
    </div>
  )
}

export default Container