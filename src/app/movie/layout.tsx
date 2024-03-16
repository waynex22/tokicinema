const MoviesLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
                <div className="flex">
                    <div>
                        <h1>Movies</h1>
                    </div>
                    <div className="mx-auto">
                    {children}
                    </div>
                </div>
    );
}
export default MoviesLayout;