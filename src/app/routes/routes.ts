import { createBrowserRouter } from 'react-router-dom'
import { AuthRoute } from './auth-route'
import { HomeRoute } from './home-route'
import { LandingRoute } from './landing-route'
import { WatchRoute } from './watch-route'
import { ProfilesRoute } from './profiles-route'
import { AdminRoute } from './admin-route'

export default createBrowserRouter([HomeRoute, AuthRoute, ProfilesRoute, LandingRoute, WatchRoute, AdminRoute])
