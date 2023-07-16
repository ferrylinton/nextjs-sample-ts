type AppContextType = {
    user: AuthenticatedUser | null,
    setAuthenticatedUser: (user: AuthenticatedUser | null) => void,
    logout: () => void,
}