import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@styles/global.css'
import { RouterProvider } from 'react-router-dom'
import routes from './routes/routes.ts'
import QueryProvider from '@providers/query-client-provider.tsx'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<QueryProvider>
			<RouterProvider router={routes} />
		</QueryProvider>
	</StrictMode>,
)
