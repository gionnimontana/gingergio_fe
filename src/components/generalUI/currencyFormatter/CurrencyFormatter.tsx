interface Props {
    value: number;
}

const CurrencyFormatter = ({ value }: Props) => {
    return (
        <span>{value.toFixed(2)}€</span>
    )
}

export default CurrencyFormatter;