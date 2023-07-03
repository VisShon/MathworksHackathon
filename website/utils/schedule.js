import { useMutation } from "@apollo/client"
import { useQuery } from "@apollo/client"
import nProgress from "nprogress"
import { useEffect } from "react"
import getCandidates from '@/apollo/query/getCandidates.graphql'
import getInterviewers from '@/apollo/query/getInterviewers.graphql'
import slotsData from '@/slots.json'

function comp(a, b) {
    return a[1].length < b[1].length;
}

function convertTime(timeString){
    const currentDate = new Date();
    const [hour, minute] = timeString.split(':').map(part => parseInt(part));
    const convertedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), hour, minute, 0); 
    const formattedDate = convertedDate.toLocaleString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
        }).replaceAll(' AM', '').replaceAll(' PM', '').replaceAll(' at', '');
    return formattedDate;   
}

function getCandidatesFromJSON(candidates){
    const candidateMap = {};
    candidates.forEach(candidate => {
    candidateMap[candidate.candidateId] = candidate.track;
    });
    return candidateMap;
}

function getInterviewersFromJSON(interviewers){
    const interviewerMap={};
    interviewers.forEach(interviewer=>{
        interviewerMap[interviewer.interviewerId]=interviewer.skillset;
    });
    return interviewerMap;
}

function getInterviewerFreeSlots(freeSlotsJSON){
    const freeSlotsMap={};
    freeSlotsJSON.forEach(freeSlot=>{
        if(!freeSlotsMap[freeSlot.interviewerId]){
            freeSlotsMap[freeSlot.interviewerId]=[]
        }
        freeSlotsMap[freeSlot.interviewerId].push([convertTime(freeSlot.timestart),convertTime(freeSlot.timeend)]);
    });
    return freeSlotsMap;
}

function circRotate(a, rotationIndex) {
    const n = a.length;
    const b = [...a];
    for (let i = 0; i < n; i++) {
        a[i] = b[(i + rotationIndex) % n];
    }
}

function schedulingAlgo1(candidates, interviewers, freeSlots) {
    const interviewersSorted = Object.entries(interviewers);
    const tracks = {};

    for (const [candidate, skill] of Object.entries(candidates)) {
        if (!tracks[skill]) {
        tracks[skill] = [];
        }
        tracks[skill].push(candidate);
    }

    interviewersSorted.sort(comp);
    const interviews=[];  
    for (const [interviewer, skills] of interviewersSorted) {
        if(!freeSlots[interviewer])continue;
        for (const s of freeSlots[interviewer]) {
        for (let j = 0; j < skills.length; j++) {
            if(!tracks[skills[j]])continue;
            if (tracks[skills[j]].length !== 0) {
            const candidate = tracks[skills[j]].pop();
            interviews.push({
                "candidateId":candidate,
                "interviewerId":interviewer,
                "duration":60,
                "timestart":s[0],
                "timeend":s[1]
            });
            circRotate(skills, j);
            break;
            }
        }
        }
    }
    return interviews;
}

export async function main(CANDIDATE_DATA, INTERVIEWER_DATA) {
    const SLOTS_DATA = slotsData
    console.log(slotsData)
    candidatesData = getCandidatesFromJSON(CANDIDATE_DATA.data.candidates);
    interviewersData = getInterviewersFromJSON(INTERVIEWER_DATA.data.interviewers);
    freeSlotsData = getInterviewerFreeSlots(SLOTS_DATA);
    interviewSchedule = schedulingAlgo1(candidatesData, interviewersData, freeSlotsData);
    return interviewSchedule;
}

main();