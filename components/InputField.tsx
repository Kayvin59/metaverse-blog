import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

interface InputFieldProps {
    type: string
    id: string
    name: string
    label: string
    placeholder: string
    value: string
    onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

export default function InputField({ type, id, name, label, placeholder, value, onChange }: InputFieldProps) {
  return (
    <div className="grid w-full max-w-lg items-center mb-5 gap-1.5">
        <Label htmlFor={id} className="mb-1">{label}:</Label>
        {type === "textarea" ?
            <Textarea id={id} className="bg-card" name={name} placeholder={placeholder} value={value} onChange={onChange} />
            :
            <Input type={type} id={id} className="bg-card" name={name} placeholder={placeholder} value={value} onChange={onChange} />
        }
    </div>
  )
}
