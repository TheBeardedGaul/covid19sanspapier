import React, { useState } from 'react';
import ListItem from '@material-ui/core/ListItem';
import './App.css';
import Paper from '@material-ui/core/Paper';
import { TextField, FormControlLabel, Checkbox } from '@material-ui/core';

interface LocalProps {
    identite: string | undefined;
    dateNaissance: string | undefined;
    adresse: string | undefined;
    option1: boolean | undefined;
    option2: boolean | undefined;
    option3: boolean | undefined;
    option4: boolean | undefined;
    option5: boolean | undefined;
    lieu: string | undefined;
    dateAttestation: string | undefined;
    setIdentiteState: (value: string) => void;
    setDateNaissanceState: (value: string) => void;
    setAdresseState: (value: string) => void;
    setOption1State: (value: boolean) => void;
    setOption2State: (value: boolean) => void;
    setOption3State: (value: boolean) => void;
    setOption4State: (value: boolean) => void;
    setOption5State: (value: boolean) => void;
    setLieuState: (value: string) => void;
    setDateAttestationState: (value: string) => void;
}

export const AttestationComponent: React.FC<LocalProps> = ({identite, dateNaissance, adresse,
    option1, option2, option3, option4, option5,
    setIdentiteState, setDateNaissanceState,
    setAdresseState, setOption1State, setOption2State,
    setOption3State, setOption4State, setOption5State}) => {
    return (
        <>
            <Paper elevation={3} className="Paper">
                <h1>Attestation de déplacement dérogatoire</h1>
                <p>
                    En application de l'article 1er du décret du 16 mars 2020 portant réglementation des déplacements dans le cadre de la lutte contre la propagation du virus Covid-19 :
                </p>
            </Paper>
            <Paper elevation={3} className="Paper">
                <p className="Underligne">
                    <ListItem>Remplissez le formulaire ci-dessous puis :
                    </ListItem>
                    <ListItem>
                        Sur ordinateur dans votre navigateur faites "imprimer..." puis "Enregistrer au format PDF"
                    </ListItem>
                    <ListItem>
                        Sur téléphone dans votre navigateur faites "partager" puis "Imprimer" et ensuite "Enregistrer au format PDF"
                    </ListItem>
                </p>
            </Paper>
            <Paper elevation={3} className="Paper">
                <p className="FormDetail">
                <ListItem>
                    Je soussigné(e)
                </ListItem> 
                <ListItem>
                    <TextField id="identite" label="Mme / M." value={identite} onChange={(value) => setIdentiteState(value.target.value)} />
                </ListItem>
                <ListItem>
                    <TextField id="dateNaissance" label="Né(e) le" value={dateNaissance} onChange={(value) => setDateNaissanceState(value.target.value)} />
                </ListItem>
                <ListItem>
                    <TextField id="adresse" label="Demeurant" value={adresse} onChange={(value) => setAdresseState(value.target.value)} />
                </ListItem>
                </p>
            </Paper>
            <Paper elevation={3} className="Paper">
                <p className="FormDetail">
                <ListItem>
                    Je certifie que mon déplacement est lié au motif suivant (cocher la case) autorisé par l'article 1er du décret du 16 mars 2020 portant réglementation des déplacements dans le cadre de la lutte contre la propagation du virus Covid-19 :
                </ListItem>
                <ListItem>
                <FormControlLabel
                    control={
                    <Checkbox value={option1} onChange={(value) => setOption1State(value.target.value === "true")}  />
                    }
                    label="Déplacements entre le domicile et le lieu d'exercice de l'activit professionnelle, lorsqu'ils sont indispensables à l'exercice d'activités et ne pouvant pas être organisées sous forme de télétravail (sur justificatif permanent) ou déplacements professionnels ne pouvant être différés"
                />
                </ListItem>
                <ListItem>
                <FormControlLabel
                    control={
                    <Checkbox value={option2} onChange={(value) => setOption2State(value.target.value === "true")} />
                    }
                    label="Déplacements pour effectuer des achats de première nécessité dans des établissements autorisés (liste sur gouvernement.fr)"
                />
                </ListItem>
                <ListItem>
                <FormControlLabel
                    control={
                    <Checkbox value={option3} onChange={(value) => setOption3State(value.target.value === "true")} />
                    }
                    label="Déplacements pour motif de santé"
                />
                </ListItem>
                <ListItem>
                <FormControlLabel
                    control={
                    <Checkbox value={option4} onChange={(value) => setOption4State(value.target.value === "true")} />
                    }
                    label="Déplacements pour motif familial impérieux, pour l'assistance aux personnes vulnérables ou la garde d'enfants"
                />
                </ListItem>
                <ListItem>
                <FormControlLabel
                    control={
                    <Checkbox value={option5} onChange={(value) => setOption5State(value.target.value === "true")} />
                    }
                    label="Déplacements brefs, à proximité du domicile, liés à l'activité physique individuelle des personnes, à l'exclusion de toute pratique sportive collective, et aux besoins des animaux de compagnie"
                />
                </ListItem>
                </p>
            </Paper>
            <Paper elevation={3} className="Paper">
                <p className="FormDetail">
                    <ListItem>
                        <TextField id="lieu" label="Fait à" />
                    </ListItem>
                    <ListItem>
                        <TextField id="date" label="Le" />
                    </ListItem> 
                </p>
            </Paper>
        </>
    );
}