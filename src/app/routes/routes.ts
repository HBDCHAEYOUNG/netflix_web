import { createBrowserRouter } from 'react-router-dom'
import { AdmineRoute } from './admine-route'
import { AuthRoute } from './auth-route'
import { HomeRoute } from './home-route'
import { LandingRoute } from './landing-route'
import { PlayRoute } from './play-route'
import { ProfilesRoute } from './profiles-route'

export default createBrowserRouter([HomeRoute, AuthRoute, ProfilesRoute, LandingRoute, PlayRoute, AdmineRoute])
