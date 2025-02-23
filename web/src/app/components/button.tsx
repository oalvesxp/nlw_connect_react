interface ButtonProps {
  text?: string
}

export function Button(props: ButtonProps){ 
  return (
    <button type='button' className="bg-violet-500 px-5 py-2 rounded-sm mr-2">
      {props.text || 'Enviar'}
    </button>
  )
}