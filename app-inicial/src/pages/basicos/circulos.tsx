import Circulo from "@/components/basicos/Circulo";

export default function paginaCirculos() {
    return (
        <div className="flex justify-around h-screen items-center">
            <Circulo text="Circ #1"/>
            <Circulo text="Circ #2"/>
            <Circulo text="Circ #3" quasePerfeito/>
            <Circulo text="Circ #3"/>
        </div>
    )
}