import { Header } from "../components/Header"
import { SiguienteCarrera } from "../components/SiguienteCarrera"
import { UltimaCarrera } from "../components/UltimaCarrera"

export const HomePage = () => {
  return (
    <>
        <Header/>
        <div className="grid grid-cols-1 md:grid-cols-2">
            <UltimaCarrera/>
            <SiguienteCarrera/>
        </div>
    </>
  )
}
