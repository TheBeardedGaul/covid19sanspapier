import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import moment from 'moment'

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
}

export const AttestationPDFComponent: React.FC<LocalProps> = ({identite, dateNaissance, adresse,
    option1, option2, option3, option4, option5,
    lieu,}) => {
    const dateAttestation = moment().format("DD/MM/YYYY");
    return (
            <Document>
                <Page size="A4" wrap >
                <View>
                    <Text>Attestation de déplacement dérogatoire</Text>
                    <Text>En application de l'article 1er du décret du 16 mars 2020 portant réglementation des déplacements dans le cadre de la lutte contre la propagation du virus Covid-19 :</Text>
                </View>
                <View>
                    <Text>Je soussigné(e)</Text>
                    <Text>Mme / M. {identite}</Text>
                    <Text>Né(e) le {dateNaissance}</Text>
                    <Text>Demeurant {adresse}</Text>
                </View>
                <View>
                    {option1 && (<Text>Déplacements entre le domicile et le lieu d'exercice de l'activit professionnelle, lorsqu'ils sont indispensables à l'exercice d'activités et ne pouvant pas être organisées sous forme de télétravail (sur justificatif permanent) ou déplacements professionnels ne pouvant être différés</Text>)}
                    {option2 && (<Text>Déplacements pour effectuer des achats de première nécessité dans des établissements autorisés (liste sur gouvernement.fr)</Text>)}
                    {option3 && (<Text>Déplacements pour motif de santé</Text>)}
                    {option4 && (<Text>Déplacements pour motif familial impérieux, pour l'assistance aux personnes vulnérables ou la garde d'enfants</Text>)}
                    {option5 && (<Text>Déplacements brefs, à proximité du domicile, liés à l'activité physique individuelle des personnes, à l'exclusion de toute pratique sportive collective, et aux besoins des animaux de compagnie</Text>)}
                </View>
                <View>
                    <Text>Fait à {lieu}</Text>
                    <Text>Le {dateAttestation}</Text>
                </View>
                </Page>
        </Document>
    );
}