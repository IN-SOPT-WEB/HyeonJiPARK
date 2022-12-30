import React, { useEffect, useState } from "react";
import { User } from "../types";
import { getUserAPI } from "../lib/api";

export interface UserStateInfo {
    status: "waiting" | "loading" | "success" | "fail";
    user: User | null;
}

// 검색 input값 받아와서 해당 유저 정보 불러오기
function useGetUser(userNameProps: string) {
    const [userState, setUserState] = useState<UserStateInfo>({
        status: "waiting",
        user: null,
    });

    useEffect(() => {
        getUser();
    }, [userNameProps]);

    const getUser = async() => {
        setUserState({ ...userState, status: "loading" });
        try {
            const data = await getUserAPI(userNameProps);
            setUserState({ status: "success", user: data });
        } catch (error) {
            setUserState({ status: "fail", user: null });
            console.error(error);
        }
    }

    return userState;
};

export default useGetUser
