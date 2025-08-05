import Button, { ButtonHome, Information} from "./button";

export default function Test ({setClose}) {    

    return (
        <div className="min-w-dvh bg-white p-2 shadow-lg">
            <div className="grid grid-cols-2">
                <div className="flex gap-2">
                    <ButtonHome />
                    <Information />
                </div>
                <div className="flex justify-end">
                    <Button setClose={setClose}/>
                </div>
            </div>
        </div>
    )
}
