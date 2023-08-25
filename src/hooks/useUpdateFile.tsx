import { useState } from "react";
import supabase from "@/utils/db/supabase";
const useFileUploader = () => {
    const [uploading, setUploading] = useState(false);

    const uploadFile = async (
        file: File,
        folderName: string,
        fileName: string
    ): Promise<string> => {
        try {
            setUploading(true);

            const { data, error } = await supabase.storage
                .from(folderName)
                .upload(fileName, file, { upsert: true });

            if (error) {
                console.error(error);
                throw error;
            }

            const publicUrl = supabase.storage
                .from(folderName)
                .getPublicUrl(data.path);

            return publicUrl.data.publicUrl;
        } finally {
            setUploading(false);
        }
    };

    return { uploading, uploadFile };
}
export default useFileUploader;