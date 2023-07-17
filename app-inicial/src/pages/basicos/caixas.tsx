import Caixa from "@/components/basicos/Caixa";

export default function paginaCaixas() {
    return (
        <div className="flex gap-7 p-7">
            <Caixa>Caixa</Caixa>
            <Caixa children="2"/>
            <Caixa>
                <ul className="list-disc">
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
            </Caixa>
        </div>
    )
}