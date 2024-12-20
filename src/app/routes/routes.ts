import { createBrowserRouter } from 'react-router-dom'
import { HomeRoute } from './home-route'
import { AuthRoute } from './auth-route'
import { ProfilesRoute } from './profiles-route'
import { LandingRoute } from './landing-route'

export default createBrowserRouter([HomeRoute, AuthRoute, ProfilesRoute, LandingRoute])
