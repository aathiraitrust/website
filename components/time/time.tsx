'use client';

import * as timeModule from "./time_util";
import { useEffect, useState } from "react";


export function CurrentTime() {
    const [date, setDate] = useState(undefined);

    useEffect(() => {
        loadDate();
        return () => {};
    }, []);

    async function loadDate() {
        const currentTime = await timeModule.currentTime();
        setDate(currentTime);
    };

    function createDate() {
        if (date) {
            return (<span data-testid="current-time">{date.toISOString()}</span>);
        } else {
            return (<span data-testid="current-time-loading">Loading...</span>);
        }
    }

    return (
        <span>{createDate()}</span>
    );
}