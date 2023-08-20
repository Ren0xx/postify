import { Button } from "@mui/material";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import PersonRemoveAlt1Icon from "@mui/icons-material/PersonRemoveAlt1";

type UserAddRemoveProps = {
    isLoggedUserPage: boolean;
    isDisabled: boolean;
    isRefetching: boolean;
    isFriend: boolean | undefined;
    addOrRemoveFriend: () => void;
};
const AddOrRemoveFriend = (props: UserAddRemoveProps) => {
    const {
        isLoggedUserPage,
        isDisabled,
        isRefetching,
        isFriend,
        addOrRemoveFriend,
    } = props;
    return (
        <div style={{ marginTop: "2em" }}>
            {!isLoggedUserPage ? (
                <Button
                    disabled={isDisabled || isRefetching}
                    startIcon={
                        isFriend ? (
                            <PersonRemoveAlt1Icon />
                        ) : (
                            <PersonAddAlt1Icon />
                        )
                    }
                    variant='contained'
                    sx={{ borderRadius: 6 }}
                    onClick={addOrRemoveFriend}>
                    {isFriend ? "Remove Friend" : "Add Friend"}
                </Button>
            ) : null}
        </div>
    );
};

export default AddOrRemoveFriend;
