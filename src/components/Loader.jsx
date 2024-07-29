import { Html } from "@react-three/drei"
import { LoaderCircle } from "lucide-react"

const Loader = () => {
  return (
    <Html>
      <div className="absolute top-0 left-0 w-full h-full justify-center items-center">
        <div className="w-[10vw] h-[10vh] rounded-full">
          <LoaderCircle className="text-white animate-spin size-5" /> 
        </div>
      </div>
    </Html>
  )
}

export default Loader