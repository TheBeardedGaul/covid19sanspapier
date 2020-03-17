import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import './App.css';
import Paper from '@material-ui/core/Paper';
import { TextField, FormControlLabel, Checkbox } from '@material-ui/core';

export const AttestationComponent: React.FC = props => {
    return (
        <>
            <Paper elevation={3} className="Paper">
                <h1>Attestation de déplacement dérogatoire</h1>
                <p>
                    En application de l'article 1er du décret du 16 mars 2020 portant réglementation des déplacements dans le cadre de la lutte contre la propagation du virus Covid-19 :
                </p>
            </Paper>
            <Paper elevation={3} className="Paper">
                <p className="FormDetail">
                <ListItem>
                    Je soussigné(e)
                </ListItem> 
                <ListItem>
                    <TextField id="standard-basic" label="Mme / M." />
                </ListItem>
                <ListItem>
                    <TextField id="standard-basic" label="Né(e) le" />
                </ListItem>
                <ListItem>
                    <TextField id="standard-basic" label="Demeurant" />
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
                    <Checkbox value="option1" />
                    }
                    label="Déplacements entre le domicile et le lieu d'exercice de l'activit professionnelle, lorsqu'ils sont indispensables à l'exercice d'activités et ne pouvant pas être organisées sous forme de télétravail (sur justificatif permanent) ou déplacements professionnels ne pouvant être différés"
                />
                </ListItem>
                <ListItem>
                <FormControlLabel
                    control={
                    <Checkbox value="option2" />
                    }
                    label="Déplacements pour effectuer des achats de première nécessité dans des établissements autorisés (liste sur gouvernement.fr)"
                />
                </ListItem>
                <ListItem>
                <FormControlLabel
                    control={
                    <Checkbox value="option3" />
                    }
                    label="Déplacements pour motif de santé"
                />
                </ListItem>
                <ListItem>
                <FormControlLabel
                    control={
                    <Checkbox value="option4" />
                    }
                    label="Déplacements pour motif familial impérieux, pour l'assistance aux personnes vulnérables ou la garde d'enfants"
                />
                </ListItem>
                <ListItem>
                <FormControlLabel
                    control={
                    <Checkbox value="option5" />
                    }
                    label="Déplacements brefs, à proximité du domicile, liés à l'activité physique individuelle des personnes, à l'exclusion de toute pratique sportive collective, et aux besoins des animaux de compagnie"
                />
                </ListItem>
                </p>
            </Paper>
            <Paper elevation={3} className="Paper">
                <p className="FormDetail">
                    <ListItem>
                    <TextField id="standard-basic" label="Fait à" />
                    </ListItem> 
                </p>
            </Paper>
        </>
    );
}