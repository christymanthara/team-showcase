// app/not-found.js
export default function NotFound() {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">404 - Member Not Found</h1>
          <p className="text-lg text-muted-foreground">
            The requested team member could not be found
          </p>
        </div>
      </div>
    )
  }