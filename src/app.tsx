import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { CreateRoom } from "./pages/create-room";
import { Room } from "./pages/room";

const queryCliente = new QueryClient()

export function App() {
  return (
    <QueryClientProvider client={queryCliente}>
      <BrowserRouter>
        <Routes>
          <Route index element={<CreateRoom />} />
          <Route path="/room/:roomId" element={<Room />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

