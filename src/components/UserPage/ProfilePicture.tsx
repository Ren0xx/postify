import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Avatar,
    Button,
    Typography,
} from "@mui/material";
import { useSession } from "next-auth/react";
import { useRef, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { api } from "@/utils/api";
import useFileUploader from "@/hooks/useUpdateFile";
type ImageSizeProps = {
    width: number;
    height: number;
};
const ProfilePicture = ({ width, height }: ImageSizeProps) => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [file, setFile] = useState<File | null>(null);

    const { data: sessionData } = useSession();
    const update = api.user.updateProfilePicture.useMutation({});

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        setFile(file || null);
    };
    const handleButtonClick = () => {
        fileInputRef.current?.click();
    };
    const { uploading, uploadFile } = useFileUploader();
    const submit = async () => {
        if (!file) return;
        const folderName = `profilePictures/${
            sessionData?.user.id || "Unknown"
        }`;
        const fileName = "profPicture";

        try {
            const path = await uploadFile(file, folderName, fileName);
            setFile(null);
            await update.mutateAsync({
                urlPath: path,
            });
        } catch (error) {
            console.error("Error uploading file:", error);
        }
    };
    return (
        <div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls='panel1a-content'
                    id='panel1a-header'>
                    <Avatar
                        alt='Profile picture'
                        sx={{ width, height }}
                        src={sessionData?.user.image ?? "Profile picture"}
                    />
                    <Typography>Zmień zdjęcie profilowe</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <form>
                        <input
                            type='file'
                            ref={fileInputRef}
                            hidden
                            onChange={handleFileChange}
                            accept='image/png, image/jpeg, image/jpg'
                        />
                        <Button variant='contained' onClick={handleButtonClick}>
                            Wybierz plik
                        </Button>
                        <p>Wybrany: {file?.name.substring(0, 20)}</p>
                        <Button
                            variant='contained'
                            // eslint-disable-next-line @typescript-eslint/no-misused-promises
                            onClick={submit}
                            disabled={!file || uploading}>
                            Submit
                        </Button>
                    </form>
                </AccordionDetails>
            </Accordion>
        </div>
    );
};
export default ProfilePicture;
