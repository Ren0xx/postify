type InfoProps = {
    name: string;
};
const InfoSection = (props: InfoProps) => {
    const { name } = props;
    return (
        <>
            <h1>
                Pokój : <i>{name}</i>
            </h1>
        </>
    );
};
export default InfoSection;
