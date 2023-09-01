interface BlogPost {
    id: string
    author: string
    title: string
    body: string
}

interface InputFieldProps {
    type: string
    id: string
    name: string
    label: string
    placeholder: string
    value: string
    onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}