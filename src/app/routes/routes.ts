import { createBrowserRouter } from 'react-router-dom'
import { HomeRoute } from './home-route'
import { AuthRoute } from './auth-route'
import { ProfilesRoute } from './profiles-route'

export default createBrowserRouter([HomeRoute, AuthRoute, ProfilesRoute])
