import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../shared/styles/global.css'
import { RouterProvider } from 'react-router-dom'
import routes from './routes/routes.ts'
createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<RouterProvider router={routes} />
	</StrictMode>,
)
