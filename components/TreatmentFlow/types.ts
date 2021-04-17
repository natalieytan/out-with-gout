export enum TreatmentOption {
  Undecided,
  GetDiagnosed,
  FlarePrednisolone,
  FlareColchicine,
  FlareInjection,
  FlareNSAID,
  FlareMultipleContraindication,
  UALAlreadyOn,
  UALNoIndication,
  UALStartPrednisolone,
  UALStartColchicine,
  UALStartNSAID,
  UALStartMultipleContraindication
}

export enum TreatmentQuestion {
  DiganosedOrNot,
  CurrentFlareOrNot,
  NumberOfJointsAffected,
  IsInjectionPreferred,
  FlareAnyRenalImpairment,
  FlareAnyColchicineIntolerance,
  FlareAnyNSAIDIntolerance,
  FlareAnyPrednisoloneIntolerance,
  OnUAL,
  WhichUAL,
  IsUALPlanned,
  IsUALIndicated,
  UALAnyRenalImpairment,
  UALAnyColchicineIntolerance,
  UALAnyNSAIDIntolerance,
  UALAnyPrednisoloneIntolerance
}
