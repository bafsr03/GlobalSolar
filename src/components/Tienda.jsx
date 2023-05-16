import React, { useState } from 'react';
import background from '../assets/background.png';
import logoblanco from '../assets/logoblanco.png';
import bannerTienda from '../assets/BannerTienda.png';
import Banner from '../assets/Banner.png'
import deye from '../assets/deye.png'
import trina from '../assets/trina.webp'
import solis from '../assets/solis.png'
import victron from '../assets/victron.png'
import mono425wTrina from "../assets/425WMonTrinasolar.png"
import mono510wtrina from "../assets/510WMonTrinasolar.png"
import mono560wtrina from "../assets/560WMonTrinasolar.png"
import mono460wpeimar from "../assets/460WMonpeimar.png"
import mono400wpeimar from "../assets/400W24VMonopeimar.png"
import mono545wpeimar from "../assets/545WMonpeimar.png"
import mono470wjinko from "../assets/470WMonJinko.png"
import mono570wjinko from "../assets/570WMonjinko.png"
import mono425wlongi from "../assets/425W24VMonlongi.png"
import mono515wlongi from "../assets/515WMonlingi.png"
import mono560wlongi from "../assets/560WMonlongi 2.png"
import ssmppt_75_10 from "../assets/SmartSolar_MPPT 75_10.png"
import ssmppt_100_50 from "../assets/SmartSolar_MPPT_100_50.png"
import ssmppt_150_35 from "../assets/SmartSolar_MPPT_150_35.png"
import ssmppt_250_70 from "../assets/SmartSolar_MPPT 250_70.png"
import ssmppt_150_70 from "../assets/SmartSolar_MPPT_150_70-E.png"
import ssmppt_rs_450_100 from "../assets/SmartSolar_MPPT_RS_450_100_48V.png"
import blsl_75_10 from "../assets/BlueSolar_MPPT_75_10-G.png"
import blsl_100_30 from "../assets/BlueSolar_MPPT_100_30-H.png"
import blsl_150_35 from "../assets/BlueSolar_MPPT_150_35-I.png"
import blsl_pmw_10a from "../assets/BlueSolar_PWM_10A-J.png"
import blsl_pmw_duo from "../assets/BlueSolar_PWM_Controlador_DUO_LCD&USB.png"
import easysol_1600 from "../assets/EasySolar_1600VA.png"
import inv_phoe_comp_1200v from "../assets/Phoenix_Inver_Compact_1200VA.png"
import inv_phoe_comp_3000v from "../assets/Phoenix_Inver_Compact_3000VA.png"
import inv_phoe_smrt_1600v from "../assets/Phoenix_Inver_Smart_1600VA.png"
import inv_sun_12a_250v from "../assets/Sun_Inverter_12V_250VA.png"
import inv_VEdirect_250va from "../assets/Phoenix_Inverter_VE.Direct_250VA.png"
import RS_48_6000 from "../assets/Inver_RS_48_6000_230V_Smart-Solar.png"
import mulpls_500v from "../assets/MultiPlus_Compact_500VA.png"
import mlpls_800_70 from "../assets/MultiPlus_800VA_70.png"
import mlpls_2000_80 from "../assets/MultiPlus_2000VA_80_.png"
import mlpls_II_120_3000 from "../assets/MultiPlus-II_2x_120V_3000VA.png"
import mlpls_II_3000v from "../assets/MultiPlus-II_3000VA.png"
import mlpls_II_GX_3000 from "../assets/MultiPlus-II_GX_3000VA.png"
import quatt_30000_48 from "../assets/Inver_Carga_Quattro_3000VA_48V.png"
import quatt_II_24_5000 from "../assets/Inver_Carga_Quattro-II 24_5000_120-50.png"
import easysol_1600_inv from "../assets/Easyplus_nw.png"
import spf_50amp from "../assets/SPF_3000TL_HVM-24_CONTROL_MPPT_50AMP.png"
import spf_100amp from "../assets/SPF_3000_ES_48V_CONTROL_MPPT_100AMP.png"
import monfas_2500 from "../assets/MONOFAS_MIN_2500_TL-XE.png"
import trifas_3000 from "../assets/TRIFAS_MOD_3000TL3-X_AFCI.png"
import trifas_36k from "../assets/TRIFAS_MID_36K_TL3-X_AFCI.png"
import monfas_12k from "../assets/MONOFAS_SPF_12KT_HVM.png"
import sph_10k from "../assets/SPH_10000_TL3_BH-UP_WIFI-X.png"
import bat_agm_65ah from "../assets/AGM_12V_65AH.png"
import bat_agm_100ah from "../assets/AGM _12V_100AH.png"
import bat_agm_150 from "../assets/AGM_12V_150AH.png"
import bat_lib_mant_200ah from "../assets/AGM_12V_200AH_LIBRE_MANT.png"
import bat_pylon_3000 from "../assets/pylontech_us3000.png"
import term_A9Hcpc from "../assets/TermaSolar-alta-presionA9H-CPC.png"
import term_plan_inte from "../assets/Termasolar_presurizada_plana_integrada.png"
import term_WACe from "../assets/Termasolar_precalentado_WAC-E.png"
import term_ST from "../assets/TermaSolarmodeloST.png"
import term_presu_SFCY from "../assets/Termasolar-sistema_presurizado-SFCY.png"
import colec_tub_SR from "../assets/Colector_tubo_calor_SR.png"
import colec_termi_sol from "../assets/colector-termico-solar.png"
import term_SFM_sincolec from "../assets/TermaSolar_SFM_sin_colector-de-presion.png"
import term_SP_plana from "../assets/TermasolarSPplacaplana.png"
import term_tub_vacioplan from "../assets/Termasolar-tubos-vacioplanos-SPV.png"
import term_SCM01 from "../assets/Termasolar_colector-SCM01.png"
import term_colec_CPCUpipe from "../assets/Termasolar_colectorCPCU-PIPE.png"
import ssPlug_Disp from "../assets/SmartSolarPluggabledisplay.png"
import FuseHolder_MDI from "../assets/FuseHolderpara MDI-Fuse.png"
import Fuse200_58a48 from "../assets/200-58V-48V.png"
import Fuse300_58a48 from "../assets/300-58V-48V.png"
import shrt_rang_3mtr from "../assets/SmartBatterySENSEShortRange-3-mtrs.png"
import smBAT_prot_12_24 from "../assets/SmartBatteryProtect12_24V-100.png"
import smBAT_prot_48v_100 from "../assets/SmartBatteryProtect48V-101.png"
import CCGX_wifi_modu from "../assets/CCGX_WIFIMODULE_SIMPLE.png"
import ctrl_gxreatil from "../assets/CO_CONTROL_GXREATIL.png"
import gx50_adap_cut_out from "../assets/GX_TOUCH50_ADAP_CCGX-CUTOUT.png"
import gx50_wall from "../assets/GX_TOUCH50_WALL_MOUNT.png"
import ve_direct_bltt from "../assets/VE.DIRECT_BLUET_SMART_DONGLE.png"
import ve_direct_30cm from "../assets/VE.DIRECTCABLE0.3mtrs.png"
import ve_direct_3mt from "../assets/VE.DIRECTCABLE3mtrs.png"
import ve_direct_5mt from "../assets/VE.DIRECTCABLE5mtrs.png"
import ve_direct_10 from "../assets/VE.DIRECTCABLE10mtrs.png"
import ve_direct_usb from "../assets/VE.DIRECTaUSBinterface.png"
import vr_drt_mk3 from "../assets/InterfaceMK3-USB_VE.Bus-USB.png"
import fuse_200_32v from "../assets/200-32v.png"
 
const Tienda = () => {
  const products = [
    
    {
      id: 1,
      brand: 'TRINASOLAR',
      name: '425W 24V Monocristalino',
      price: 150,
      image: mono425wTrina,
      category: 'PANEL SOLAR',
    },
    {
      id: 2,
      brand: 'TRINASOLAR',
      name: '510W 24V Monocristalino',
      price: 150,
      image: mono510wtrina,
      category: 'PANEL SOLAR',
    },
    {
      id: 3,
      brand: 'TRINASOLAR',
      name: '560W 24V Monocristalino',
      price: 150,
      image: mono560wtrina,
      category: 'PANEL SOLAR',
    },
    {
      id: 4,
      brand: 'PEIMAR',
      name: '400W 24V Monocristalino',
      price: 150,
      image: mono460wpeimar,
      category: 'PANEL SOLAR',
    },
    {
      id: 5,
      brand: 'PEIMAR',
      name: '460W 24V Monocristalino',
      price: 150,
      image: mono400wpeimar,
      category: 'Categoria1',
    },
    {
      id: 6,
      brand: 'PEIMAR',
      name: '545W 24V Monocristalino',
      price: 150,
      image: mono545wpeimar,
      category: 'PANEL SOLAR',
    },
    {
      id: 7,
      brand: 'JINKO',
      name: '470W 24V Monocristalino',
      price: 150,
      image: mono470wjinko,
      category: 'PANEL SOLAR',
    },
    {
      id: 8,
      brand: 'JINKO',
      name: '570W 24V Monocristalino',
      price: 150,
      image: mono570wjinko,
      category: 'PANEL SOLAR',
    },
    {
      id: 9,
      brand: 'LONGI',
      name: '425W 24V Monocristalino',
      price: 150,
      image: mono425wlongi,
      category: 'PANEL SOLAR',
    },
    {
      id: 10,
      brand: 'LONGI',
      name: '515W 24V Monocristalino',
      price: 150,
      image: mono515wlongi,
      category: 'PANEL SOLAR',
    },
    {
      id: 11,
      brand: 'LONGI',
      name: '560W 24V Monocristalino',
      price: 150,
      image: mono560wlongi,
      category: 'PANEL SOLAR',
    },
    {
      id: 12,
      brand: 'VICTRON ENERGY',
      name: 'SmartSolar MPPT 75/10 (12/24/48 volt) A',
      price: 150,
      image: ssmppt_75_10,
      category: 'CONTROLADOR',
    },{
      id: 13,
      brand: 'VICTRON ENERGY',
      name: 'SmartSolar MPPT 75/15 (12/24/48 volt) A',
      price: 150,
      image: ssmppt_75_10,
      category: 'CONTROLADOR',
    },{
      id: 14,
      brand: 'VICTRON ENERGY',
      name: 'SmartSolar MPPT  100/15 (12/24/48 volt) A',
      price: 150,
      image: ssmppt_75_10,
      category: 'CONTROLADOR',
    },{
      id: 15,
      brand: 'VICTRON ENERGY',
      name: 'SmartSolar MPPT 100/20 (12/24/48 volt) A',
      price: 150,
      image: ssmppt_75_10,
      category: 'CONTROLADOR',
    },{
      id: 16,
      brand: 'VICTRON ENERGY',
      name: 'SmartSolar MPPT 100/30 (12/24 volt) B',
      price: 150,
      image: ssmppt_100_50,
      category: 'CONTROLADOR',
    },{
      id: 17,
      brand: 'VICTRON ENERGY',
      name: 'SmartSolar MPPT 100/50 (12/24 volt) B',
      price: 150,
      image: ssmppt_100_50,
      category: 'CONTROLADOR',
    },{
      id: 18,
      brand: 'VICTRON ENERGY',
      name: 'SmartSolar MPPT 150/35 (12/24/36/48 volt) C',
      price: 150,
      image: ssmppt_150_35,
      category: 'CONTROLADOR',
    },{
      id: 19,
      brand: 'VICTRON ENERGY',
      name: 'SmartSolar MPPT 150/45 (12/24/36/48 volt) C',
      price: 150,
      image: ssmppt_150_35,
      category: 'CONTROLADOR',
    },{
      id: 20,
      brand: 'VICTRON ENERGY',
      name: 'SmartSolar MPPT 150/60 (12/24/36/48 volt) D',
      price: 150,
      image: ssmppt_250_70,
      category: 'CONTROLADOR',
    },{
      id: 21,
      brand: 'VICTRON ENERGY',
      name: 'SmartSolar MPPT 250/70 (12/24/36/48 volt) D',
      price: 150,
      image: ssmppt_250_70,
      category: 'CONTROLADOR',
    },{
      id: 22,
      brand: 'VICTRON ENERGY',
      name: 'SmartSolar MPPT 150/70 (12/24/36/48 volt) E',
      price: 150,
      image: ssmppt_150_70,
      category: 'CONTROLADOR',
    },{
      id: 23,
      brand: 'VICTRON ENERGY',
      name: 'SmartSolar MPPT 250/100  VE.Can (12/24/36/48 volt) E',
      price: 150,
      image: ssmppt_150_70,
      category: 'CONTROLADOR',
    },{
      id: 24,
      brand: 'VICTRON ENERGY',
      name: 'SmartSolar MPPT RS 450/100 48 volt F',
      price: 150,
      image: ssmppt_rs_450_100,
      category: 'CONTROLADOR',
    },{
      id: 25,
      brand: 'VICTRON ENERGY',
      name: 'SmartSolar MPPT RS 450/200 48 volt F',
      price: 150,
      image: ssmppt_rs_450_100,
      category: 'CONTROLADOR',
    },{
      id: 26,
      brand: 'VICTRON ENERGY',
      name: 'BlueSolar MPPT 75/10 (12/24/48 volt) G',
      price: 150,
      image: blsl_75_10,
      category: 'CONTROLADOR',
    },{
      id: 27,
      brand: 'VICTRON ENERGY',
      name: 'BlueSolar MPPT 75/15 (12/24/48 volt) G',
      price: 150,
      image: blsl_75_10,
      category: 'CONTROLADOR',
    },{
      id: 28,
      brand: 'VICTRON ENERGY',
      name: 'BlueSolar MPPT 100/15 (12/24/48 volt) G',
      price: 150,
      image: blsl_75_10,
      category: 'CONTROLADOR',
    },{
      id: 29,
      brand: 'VICTRON ENERGY',
      name: 'BlueSolar MPPT 100/20 (12/24/48 volt) G',
      price: 150,
      image: blsl_75_10,
      category: 'CONTROLADOR',
    },{
      id: 30,
      brand: 'VICTRON ENERGY',
      name: 'BlueSolar MPPT 100/30 (12/24 volt) H',
      price: 150,
      image: blsl_100_30,
      category: 'CONTROLADOR',
    },{
      id: 31,
      brand: 'VICTRON ENERGY',
      name: 'BlueSolar MPPT 100/50 (12/24 volt) H',
      price: 150,
      image: blsl_100_30,
      category: 'CONTROLADOR',
    },{
      id: 32,
      brand: 'VICTRON ENERGY',
      name: 'BlueSolar MPPT 150/35 (12/24 volt) I',
      price: 150,
      image: blsl_150_35,
      category: 'CONTROLADOR',
    },{
      id: 33,
      brand: 'VICTRON ENERGY',
      name: 'BlueSolar MPPT 250/100 (12/24 volt) I',
      price: 150,
      image: blsl_150_35,
      category: 'CONTROLADOR',
    },{
      id: 34,
      brand: 'VICTRON ENERGY',
      name: 'BlueSolar PWM 10A  (12/24 volt) J',
      price: 150,
      image: blsl_pmw_10a,
      category: 'CONTROLADOR',
    },{
      id: 35,
      brand: 'VICTRON ENERGY',
      name: 'BlueSolar PWM 20A  (12/24 volt) J',
      price: 150,
      image: blsl_pmw_10a,
      category: 'CONTROLADOR',
    },{
      id: 36,
      brand: 'VICTRON ENERGY',
      name: 'BlueSolar PWM 30A  (12/24 volt) J',
      price: 150,
      image: blsl_pmw_10a,
      category: 'CONTROLADOR',
    },{
      id: 37,
      brand: 'VICTRON ENERGY',
      name: 'BlueSolar PWM Controlador DUO LCD&USB  (12/24/48 volt) K',
      price: 150,
      image: blsl_pmw_duo,
      category: 'CONTROLADOR',
    },
    {
      id: 38,
      brand: 'VICTRON ENERGY',
      name: 'EasySolar 1600VA L',
      price: 150,
      image: easysol_1600,
      category: 'CONTROLADOR',
    },
    {
      id: 39,
      brand: 'VICTRON ENERGY',
      name: 'Phoenix Inverter Compact 1200VA (12/24 volt)',
      price: 150,
      image: inv_phoe_comp_1200v,
      category: 'INVERSOR',
    },{
      id: 40,
      brand: 'VICTRON ENERGY',
      name: 'Phoenix Inverter Compact 2000VA (12/24 volt)',
      price: 150,
      image: inv_phoe_comp_1200v,
      category: 'INVERSOR',
    },{
      id: 41,
      brand: 'VICTRON ENERGY',
      name: 'Phoenix Inverter Compact 3000VA',
      price: 150,
      image: inv_phoe_comp_3000v,
      category: 'INVERSOR',
    },{
      id: 42,
      brand: 'VICTRON ENERGY',
      name: 'Phoenix Inverter Compact 5000VA',
      price: 150,
      image: inv_phoe_comp_3000v,
      category: 'INVERSOR',
    },{
      id: 43,
      brand: 'VICTRON ENERGY',
      name: 'Phoenix Inverter Smart 1600VA (12/24/48 volt)',
      price: 150,
      image: inv_phoe_smrt_1600v,
      category: 'INVERSOR',
    },{
      id: 44,
      brand: 'VICTRON ENERGY',
      name: 'Phoenix Inverter Smart 2000VA (12/24/48 volt)',
      price: 150,
      image: inv_phoe_smrt_1600v,
      category: 'INVERSOR',
    },{
      id: 45,
      brand: 'VICTRON ENERGY',
      name: 'Phoenix Inverter Smart 3000VA (12/24/48 volt)',
      price: 150,
      image: inv_phoe_smrt_1600v,
      category: 'INVERSOR',
    },{
      id: 46,
      brand: 'VICTRON ENERGY',
      name: 'Phoenix Inverter Smart 5000VA (12/24/48 volt)',
      price: 150,
      image: inv_phoe_smrt_1600v,
      category: 'INVERSOR',
    },{
      id: 47,
      brand: 'VICTRON ENERGY',
      name: 'Sun Inverter 12V|250VA',
      price: 150,
      image: inv_sun_12a_250v,
      category: 'INVERSOR',
    },{
      id: 48,
      brand: 'VICTRON ENERGY',
      name: 'Sun Inverter 24V|250VA',
      price: 150,
      image: inv_sun_12a_250v,
      category: 'INVERSOR',
    },{
      id: 49,
      brand: 'VICTRON ENERGY',
      name: 'Phoenix Inverter VE.Direct 250VA',
      price: 150,
      image: inv_VEdirect_250va,
      category: 'INVERSOR',
    },{
      id: 50,
      brand: 'VICTRON ENERGY',
      name: 'Phoenix Inverter VE.Direct 375VA',
      price: 150,
      image: inv_VEdirect_250va,
      category: 'INVERSOR',
    },{
      id: 51,
      brand: 'VICTRON ENERGY',
      name: 'Phoenix Inverter VE.Direct 500VA',
      price: 150,
      image: inv_VEdirect_250va,
      category: 'INVERSOR',
    },{
      id: 52,
      brand: 'VICTRON ENERGY',
      name: 'Phoenix Inverter VE.Direct 800VA',
      price: 150,
      image: inv_VEdirect_250va,
      category: 'INVERSOR',
    },{
      id: 53,
      brand: 'VICTRON ENERGY',
      name: 'Phoenix Inverter VE.Direct 1200VA',
      price: 150,
      image: inv_VEdirect_250va,
      category: 'INVERSOR',
    },{
      id: 54,
      brand: 'VICTRON ENERGY',
      name: 'Inverter RS 48/6000 230V Smart Solar',
      price: 150,
      image: RS_48_6000,
      category: 'INVERSOR',
    },{
      id: 55,
      brand: 'VICTRON ENERGY',
      name: 'MultiPlus Compact 500VA',
      price: 150,
      image: mulpls_500v,
      category: 'INVERSOR',
    },{
      id: 56,
      brand: 'VICTRON ENERGY',
      name: 'MultiPlus Compact 800VA',
      price: 150,
      image: mulpls_500v,
      category: 'INVERSOR',
    },{
      id: 57,
      brand: 'VICTRON ENERGY',
      name: 'MultiPlus Compact 1200VA',
      price: 150,
      image: mulpls_500v,
      category: 'INVERSOR',
    },{
      id: 58,
      brand: 'VICTRON ENERGY',
      name: 'MultiPlus Compact 1600VA',
      price: 150,
      image: mulpls_500v,
      category: 'INVERSOR',
    },{
      id: 59,
      brand: 'VICTRON ENERGY',
      name: 'MultiPlus 800VA|70',
      price: 150,
      image: mlpls_800_70,
      category: 'INVERSOR',
    },{
      id: 60,
      brand: 'VICTRON ENERGY',
      name: 'MultiPlus 1200VA|70',
      price: 150,
      image: mlpls_800_70,
      category: 'INVERSOR',
    },{
      id: 61,
      brand: 'VICTRON ENERGY',
      name: 'MultiPlus 1600VA|70',
      price: 150,
      image: mlpls_800_70,
      category: 'INVERSOR',
    },{
      id: 62,
      brand: 'VICTRON ENERGY',
      name: 'MultiPlus 2000VA|70',
      price: 150,
      image: mlpls_800_70,
      category: 'INVERSOR',
    },{
      id: 63,
      brand: 'VICTRON ENERGY',
      name: 'MultiPlus 3000VA|70',
      price: 150,
      image: mlpls_800_70,
      category: 'INVERSOR',
    },{
      id: 64,
      brand: 'VICTRON ENERGY',
      name: 'MultiPlus 5000VA|70',
      price: 150,
      image: mlpls_800_70,
      category: 'INVERSOR',
    },{
      id: 65,
      brand: 'VICTRON ENERGY',
      name: 'MultiPlus 2000VA|80',
      price: 150,
      image: mlpls_2000_80,
      category: 'INVERSOR',
    },{
      id: 66,
      brand: 'VICTRON ENERGY',
      name: 'MultiPlus-II 2x 120V 3000VA',
      price: 150,
      image: mlpls_II_120_3000,
      category: 'INVERSOR',
    },{
      id: 67,
      brand: 'VICTRON ENERGY',
      name: 'MultiPlus-II 3000VA',
      price: 150,
      image: mlpls_II_3000v,
      category: 'INVERSOR',
    },{
      id: 68,
      brand: 'VICTRON ENERGY',
      name: 'MultiPlus-II 5000VA',
      price: 150,
      image: mlpls_II_3000v,
      category: 'INVERSOR',
    },{
      id: 69,
      brand: 'VICTRON ENERGY',
      name: 'MultiPlus-II 8000VA',
      price: 150,
      image: mlpls_II_3000v,
      category: 'INVERSOR',
    },{
      id: 70,
      brand: 'VICTRON ENERGY',
      name: 'MultiPlus-II 10000VA',
      price: 150,
      image: mlpls_II_3000v,
      category: 'INVERSOR',
    },{
      id: 71,
      brand: 'VICTRON ENERGY',
      name: 'MultiPlus-II 15000VA',
      price: 150,
      image: mlpls_II_3000v,
      category: 'INVERSOR',
    },{
      id: 72,
      brand: 'VICTRON ENERGY',
      name: 'MultiPlus-II GX 3000VA',
      price: 150,
      image: mlpls_II_GX_3000,
      category: 'INVERSOR',
    },{
      id: 73,
      brand: 'VICTRON ENERGY',
      name: 'MultiPlus-II GX 5000VA',
      price: 150,
      image: mlpls_II_GX_3000,
      category: 'INVERSOR',
    },{
      id: 74,
      brand: 'VICTRON ENERGY',
      name: 'EasySolar-II GX 3000VA',
      price: 150,
      image: mlpls_II_GX_3000,
      category: 'INVERSOR',
    },{
      id: 75,
      brand: 'VICTRON ENERGY',
      name: 'EasySolar-II GX 5000VA',
      price: 150,
      image: mlpls_II_GX_3000,
      category: 'INVERSOR',
    },{
      id: 76,
      brand: 'VICTRON ENERGY',
      name: 'Inversor Cargador Quattro 3000VA 48V',
      price: 150,
      image: quatt_30000_48,
      category: 'INVERSOR',
    },{
      id: 77,
      brand: 'VICTRON ENERGY',
      name: 'Inversor Cargador Quattro 5000VA 48V',
      price: 150,
      image: quatt_30000_48,
      category: 'INVERSOR',
    },{
      id: 78,
      brand: 'VICTRON ENERGY',
      name: 'Inversor Cargador Quattro 8000VA 48V',
      price: 150,
      image: quatt_30000_48,
      category: 'INVERSOR',
    },{
      id: 79,
      brand: 'VICTRON ENERGY',
      name: 'Inversor Cargador Quattro 10000VA 48V',
      price: 150,
      image: quatt_30000_48,
      category: 'INVERSOR',
    },{
      id: 80,
      brand: 'VICTRON ENERGY',
      name: 'Inversor Cargador Quattro 15000VA 48V',
      price: 150,
      image: quatt_30000_48,
      category: 'INVERSOR',
    },{
      id: 81,
      brand: 'VICTRON ENERGY',
      name: 'Inversor Cargador Quattro-II 24/5000/120-50',
      price: 150,
      image: quatt_II_24_5000,
      category: 'INVERSOR',
    },{
      id: 82,
      brand: 'VICTRON ENERGY',
      name: 'Inversor Cargador Quattro-II 48/5000/70-50',
      price: 150,
      image: quatt_II_24_5000,
      category: 'INVERSOR',
    },{
      id: 83,
      brand: 'VICTRON ENERGY',
      name: 'Inversor EasyPlus 1600 VA',
      price: 150,
      image: easysol_1600_inv,
      category: 'INVERSOR',
    },{
      id: 84,
      brand: 'GROWATT',
      name: 'SPF 3000TL HVM-24 CONTROL MPPT 50AMP',
      price: 150,
      image: spf_50amp,
      category: 'INVERSOR',
    },{
      id: 85,
      brand: 'GROWATT',
      name: 'SPF 3000 ES 48V CONTROL MPPT 60AMP',
      price: 150,
      image: spf_50amp,
      category: 'INVERSOR',
    },{
      id: 86,
      brand: 'GROWATT',
      name: 'SPF 3000 ES 48V CONTROL MPPT 100AMP',
      price: 150,
      image: spf_100amp,
      category: 'INVERSOR',
    },{
      id: 87,
      brand: 'GROWATT',
      name: 'MONOFASICO MIN 2500 TL-XE',
      price: 150,
      image: monfas_2500,
      category: 'INVERSOR',
    },
    {
      id: 88,
      brand: 'GROWATT',
      name: 'TRIFASICO MOD 3000TL3-X con AFCI',
      price: 150,
      image: trifas_3000,
      category: 'INVERSOR',
    },
    {
      id: 89,
      brand: 'GROWATT',
      name: 'TRIFASICO MOD 5000TL3-X con AFCI',
      price: 150,
      image: trifas_3000,
      category: 'INVERSOR',
    },
    {
      id: 90,
      brand: 'GROWATT',
      name: 'TRIFASICO MID 36K TL3-X con AFCI',
      price: 150,
      image: trifas_36k,
      category: 'Categoria1',
    },{
      id: 91,
      brand: 'GROWATT',
      name: 'MONOFASICO SPF 12KT HVM',
      price: 150,
      image: monfas_12k,
      category: 'INVERSOR',
    },{
      id: 92,
      brand: 'GROWATT',
      name: 'SPH 10000 TL3 BH-UP con WIFI-X',
      price: 150,
      image: sph_10k,
      category: 'INVERSOR',
    },{
      id: 93,
      brand: 'AOKLY',
      name: 'AGM 12V 65AH',
      price: 150,
      image: bat_agm_65ah,
      category: 'BATERIA_SECO',
    },{
      id: 94,
      brand: 'AOKLY',
      name: 'AGM 12V 100AH',
      price: 150,
      image: bat_agm_100ah,
      category: 'BATERIA_SECO',
    },{
      id: 95,
      brand: 'AOKLY',
      name: 'AGM 12V 150AH',
      price: 150,
      image: bat_agm_150,
      category: 'BATERIA_SECO',
    },{
      id: 96,
      brand: 'AOKLY',
      name: 'AGM 12V 200AH LIBRE MANTENIMIENTO',
      price: 150,
      image: bat_lib_mant_200ah,
      category: 'BATERIA_SECO',
    },{
      id: 97,
      brand: 'AOKLY',
      name: 'GEL 12V 100AH',
      price: 150,
      image: bat_lib_mant_200ah,
      category: 'BATERIA_GEL',
    },{
      id: 98,
      brand: 'AOKLY',
      name: 'GEL 12V 150AH',
      price: 150,
      image: bat_lib_mant_200ah,
      category: 'BATERIA_GEL',
    },{
      id: 99,
      brand: 'AOKLY',
      name: 'GEL 12V 200AH',
      price: 150,
      image: bat_lib_mant_200ah,
      category: 'BATERIA_GEL',
    },{
      id: 100,
      brand: 'PYLONTECH',
      name: '3.5KWH 48V US3000',
      price: 150,
      image: bat_pylon_3000,
      category: 'BATERIA_LITIO',
    },{
      id: 101,
      brand: 'SUNTASK',
      name: 'Terma Solar de alta presión A9H CPC',
      price: 150,
      image: term_A9Hcpc,
      category: 'TERMA_SOLAR',
    },{
      id: 102,
      brand: 'SUNTASK',
      name: 'Terma solar presurizada plana integrada',
      price: 150,
      image: term_plan_inte,
      category: 'TERMA_SOLAR',
    },{
      id: 103,
      brand: 'SUNTASK',
      name: 'Terma solar precalentado WAC-E',
      price: 150,
      image: term_WACe,
      category: 'TERMA_SOLAR',
    },{
      id: 104,
      brand: 'SUNTASK',
      name: 'Terma Solar modelo ST',
      price: 150,
      image: term_ST,
      category: 'TERMA_SOLAR',
    },{
      id: 105,
      brand: 'SUNTASK',
      name: 'Terma solar con sistema presurizado SFCY',
      price: 150,
      image: term_presu_SFCY,
      category: 'TERMA_SOLAR',
    },{
      id: 106,
      brand: 'SUNTASK',
      name: 'Colector de tubo de calor SR',
      price: 150,
      image: colec_tub_SR,
      category: 'TERMA_SOLAR',
    },{
      id: 107,
      brand: 'SUNTASK',
      name: 'SHC Montaje rápido CPC Colector de tubo de calor',
      price: 150,
      image: colec_termi_sol,
      category: 'TERMA_SOLAR',
    },{
      id: 108,
      brand: 'SUNTASK',
      name: 'Terma Solar SFM sin colector de presión',
      price: 150,
      image: term_SFM_sincolec,
      category: 'TERMA_SOLAR',
    },{
      id: 109,
      brand: 'SUNTASK',
      name: 'Terma solar SP de placa plana',
      price: 150,
      image: term_SP_plana,
      category: 'TERMA_SOLAR',
    },{
      id: 110,
      brand: 'SUNTASK',
      name: 'Terma solar de tubos de vacio planos SPV',
      price: 150,
      image: term_tub_vacioplan,
      category: 'TERMA_SOLAR',
    },{
      id: 111,
      brand: 'SUNTASK',
      name: 'Terma solar con colector SCM01',
      price: 150,
      image: term_SCM01,
      category: 'TERMA_SOLAR',
    },{
      id: 112,
      brand: 'SUNTASK',
      name: 'Terma solar con colector CPC U-PIPE',
      price: 150,
      image: term_colec_CPCUpipe,
      category: 'TERMA_SOLAR',
    },{
      id: 113,
      brand: 'VICTRON ENERGY',
      name: 'Smart Solar Pluggable display',
      price: 150,
      image: ssPlug_Disp,
      category: 'ACCESORIOS',
    },{
      id: 114,
      brand: 'VICTRON ENERGY',
      name: 'Fuse Holder para MDI - Fuse',
      price: 150,
      image: FuseHolder_MDI,
      category: 'ACCESORIOS',
    },{
      id: 115,
      brand: 'VICTRON ENERGY',
      name: 'Mega-Fuse 200A/58V para 48V',
      price: 150,
      image: Fuse200_58a48,
      category: 'ACCESORIOS',
    },{
      id: 116,
      brand: 'VICTRON ENERGY',
      name: 'Mega-Fuse 300A/58V para 48V',
      price: 150,
      image: Fuse300_58a48,
      category: 'ACCESORIOS',
    },{
      id: 117,
      brand: 'VICTRON ENERGY',
      name: 'Smart Battery SENSE Short Range (más 3 mtrs)',
      price: 150,
      image: shrt_rang_3mtr,
      category: 'ACCESORIOS',
    },{
      id: 118,
      brand: 'VICTRON ENERGY',
      name: 'Smart Battery Protect 12/24V-100',
      price: 150,
      image: smBAT_prot_12_24,
      category: 'ACCESORIOS',
    },{
      id: 119,
      brand: 'VICTRON ENERGY',
      name: 'Smart Battery Protect 48V-101',
      price: 150,
      image: smBAT_prot_48v_100,
      category: 'ACCESORIOS',
    },{
      id: 120,
      brand: 'VICTRON ENERGY',
      name: 'CCGX WIFI MODULE SIMPLE',
      price: 150,
      image: CCGX_wifi_modu,
      category: 'ACCESORIOS',
    },{
      id: 121,
      brand: 'VICTRON ENERGY',
      name: 'COLOR CONTROL GX REATIL',
      price: 150,
      image: ctrl_gxreatil,
      category: 'ACCESORIOS',
    },{
      id: 122,
      brand: 'VICTRON ENERGY',
      name: 'GX TOUCH 50 ADAPTADOR para CCGX CUT OUT',
      price: 150,
      image: gx50_adap_cut_out,
      category: 'ACCESORIOS',
    },{
      id: 123,
      brand: 'VICTRON ENERGY',
      name: 'GX TOUCH 50  WALL MOUNT',
      price: 150,
      image: gx50_wall,
      category: 'ACCESORIOS',
    },{
      id: 124,
      brand: 'VICTRON ENERGY',
      name: 'VE. DIRECT BLUETOOHT SMART DONGLE',
      price: 150,
      image: ve_direct_bltt,
      category: 'ACCESORIOS',
    },{
      id: 125,
      brand: 'VICTRON ENERGY',
      name: 'VE. DIRECT CABLE 0.3 mtrs',
      price: 150,
      image: ve_direct_30cm,
      category: 'ACCESORIOS',
    },{
      id: 126,
      brand: 'VICTRON ENERGY',
      name: 'VE. DIRECT CABLE 3 mtrs',
      price: 150,
      image: ve_direct_3mt,
      category: 'ACCESORIOS',
    },{
      id: 127,
      brand: 'VICTRON ENERGY',
      name: 'VE. DIRECT CABLE 5 mtrs',
      price: 150,
      image: ve_direct_5mt,
      category: 'ACCESORIOS',
    },{
      id: 128,
      brand: 'VICTRON ENERGY',
      name: 'VE. DIRECT CABLE 10mtrs',
      price: 150,
      image: ve_direct_10,
      category: 'ACCESORIOS',
    },{
      id: 129,
      brand: 'VICTRON ENERGY',
      name: 'VE. DIRECT a USB interface',
      price: 150,
      image: ve_direct_usb,
      category: 'ACCESORIOS',
    },{
      id: 130,
      brand: 'VICTRON ENERGY',
      name: 'Interface MK3-USB (VE.Bus a USB)',
      price: 150,
      image: vr_drt_mk3,
      category: 'ACCESORIOS',
    },
    {
      id: 131,
      brand: 'VICTRON ENERGY',
      name: 'Mega-Fuse 200A/32V ',
      price: 150,
      image: fuse_200_32v,
      category: 'ACCESORIOS',
    },
    
    ]
    
  ;
  const categories = Array.from(new Set(products.map((product) => product.category)));
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState(1000);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [productMark, setProductMark] = useState('');
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handlePriceRange = (e) => {
    setPriceRange(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Filter products based on the selected product mark as well
    const filtered = products.filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        product.price <= priceRange &&
        (productMark === '' || product.mark === productMark)
    );
    setFilteredProducts(filtered);
  };
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    filterProducts(searchTerm, priceRange, category);
  };

  const filterProducts = (search, price, category) => {
    const filtered = products.filter(
      (product) =>
        product.name.toLowerCase().includes(search.toLowerCase()) &&
        product.price <= price &&
        (category === 'All' || product.category === category)
    );
    setFilteredProducts(filtered);
  };
  const handleProductMarkChange = (e) => {
    setProductMark(e.target.value);
  };
  return (
    
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#F2EFE7]'>
      <div className="relative">
        <img className="w-full h-full object-cover" src={bannerTienda} alt="BannerCalculadora" /> {/* Update the classes for the image */}
        
      </div>
      <div className="Productodestacado relative w-full md:w-auto md:h-auto md:max-w-screen-md lg:max-w-screen-xl">
  <p class="KITMAS PEDIDO absolute w-72 h-10 top-0 left-1/2 transform -translate-x-1/2 text-3xl font-bold text-center text-blue-900 md:static md:w-auto md:h-auto md:text-4xl">KIT MAS PEDIDO</p>
  <p class="s/1200 absolute w-36 h-9 text-3xl font-bold text-center text-blue-900 md:static md:w-auto md:h-auto md:text-4xl md:mt-4 md:ml-2">S/ 1200</p>
  <p class="KITDEYE 1000 KwH absolute w-full h-12 text-4xl font-medium text-center text-blue-900 md:static md:w-auto md:h-auto md:text-5xl md:mt-8">KIT DEYE 1000 KwH</p>
  <p class="4Paneles Deye + Inversor + Controlador de carga + 4 Baterías absolute w-full h-10 text-base font-medium text-center text-blue-900 md:static md:w-auto md:h-auto md:text-lg md:mt-16">4 Paneles Deye + Inversor + Controlador de carga + 4 Baterías</p>
  <img class="Paneles-solares-Kit-solar-Victron-3650-wh absolute w-48 h-48 right-0 bottom-0 md:static md:w-auto md:h-auto md:mt-4 md:ml-4" src="https://via.placeholder.com/192x192"/>
  <div class="Rectangle8 absolute w-32 h-6 bg-gradient-to-b from-white to-gray-200 shadow rounded-full md:static md:w-auto md:h-auto md:mt-8 md:ml-2"></div>
  <p class="Añadira carrito absolute w-28 h-6 text-sm font-semibold text-blue-900 md:static md:w-auto md:h-auto md:text-base md:mt-8 md:ml-4">Añadir a carrito</p>
  <div class="Rectangle9 absolute inline-flex items-center justify-center w-32 h-6 pl-5 pr-4 pt-0.5 pb-1 bg-gradient-to-b from-white to-gray-200 shadow rounded-full md:static md:w-auto md:h-auto md:ml-8">
    <p class="Vermás Kits flex-1 h-full text-sm font-semibold text-blue-900">Ver más Kits</p>
  </div>
</div>
 
<div className="container mx-auto px-4 mt-16">
    <h1 className="text-3xl font-bold my-4">Lista de Productos</h1>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <div className="col-span-4 md:col-span-1">
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Categorias</h2>
          <ul className="flex flex-wrap">
            {['All', ...categories].map((category) => (
              <li key={category} className="mr-2 mb-2">
                <button
                  onClick={() => handleCategorySelect(category)}
                  className={`px-4 py-2 rounded ${
                    selectedCategory === category ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'
                  }`}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>
        {/* Place the search box inside the category section */}
        <div className="bg-white rounded p-4 shadow-md">
        <h2 className="text-xl font-semibold mb-4">Buscar Producto</h2>
        <form onSubmit={handleSubmit}>
          {/* Your existing search box */}
          {/* Add the price range bar */}
          <div className="mb-4">
            <label htmlFor="priceRange" className="block text-gray-700 mb-2">
              Por Precio: S/.{priceRange}
            </label>
            <input
              type="range"
              id="priceRange"
              name="priceRange"
              min="0"
              max="1000"
              value={priceRange}
              onChange={handlePriceRange}
              className="w-full"
            />
          </div>
          {/* Add the dropdown for product mark */}
          <div className="mb-4">
            <label htmlFor="mark" className="block text-gray-700 mb-2">
              Marca:
            </label>
            <select
              id="mark"
              name="mark"
              value={productMark}
              onChange={handleProductMarkChange}
              className="w-full bg-white border border-gray-300 rounded py-2 px-3 text-gray-700"
            >
              <option value="">Todos</option>
              {/* Add your product marks as options here */}
              <option value="Mark 1">Marca 1</option>
              <option value="Mark 2">Marca 2</option>
            </select>
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded">
            Buscar
          </button>
        </form>
      </div>
    </div>
      <div className="col-span-4 md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4">
      {filteredProducts.map((product) => (
  <div key={product.id} className="bg-white rounded p-4 shadow-md">
    <img
      className="w-full h-48 object-cover mb-4"
      src={product.image}
      alt={product.name}
    />
    <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
    <p className="text-gray-500">Precio: s/.{product.price}</p>
  </div>
))}
      </div>
    </div>
  </div>
  <div className="relative mx-auto mt-16">
  <img
    className="w-full h-full object-cover"
    src={Banner}
    alt="Banner"
  />
  <p className="absolute left-[172px] top-0 text-2xl font-semibold text-gray-200 whitespace-pre-line">
    Te asesoramos para que encuentres
    <br />
    el producto ideal para tu proyecto solar.
  </p>
  <div className="absolute left-[674px] top-[19px] w-36 h-6 bg-gradient-to-b from-white to-gray-200 shadow rounded-full" />
  <p className="absolute left-[684px] top-[21px] w-32 h-6 text-base font-semibold text-blue-900">
    Reserva tu cita
  </p>
</div>

<div class=" mx-auto mt-16 max-w-screen-xl">
<p class="absolute  text-base font-bold text-gray-500 transform -translate-x-1/2 left-1/2 top-1/6 md:text-lg lg:text-xl">REPRESENTANTES EN EL PERU</p>
        <div class="grid grid-cols-2 gap-28 md:grid-cols-4 lg:grid-cols-4 ">
          <div class="col-span-1 flex items-center justify-center md:col-span-2 lg:col-span-1">
            <img class="" src={deye} />
          </div>

          <div class="col-span-1 flex items-center justify-center md:col-span-2 lg:col-span-1">
            <img class="" src={trina} />
          </div>

          <div class="col-span-1 flex items-center justify-center md:col-span-2 lg:col-span-1">
            <img class="" src={solis} />
          </div>

          <div class="col-span-1 flex items-center justify-center md:col-span-3 lg:col-span-1">
            <img class="" src={victron} />
          </div>
        </div>
      </div>

<div class=' mx-auto  mt-16'>
      <div class="relative bg-gray-900 py-8 md:py-12">
        <div class="absolute inset-0 overflow-hidden">
          <img class="w-full h-full object-cover" src={background} alt="placeholder image" />
        </div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-between relative z-10">
          <div class="flex flex-col md:flex-row">
            <a href="/" class="text-gray-200  font-bold text-base mb-3 md:mb-0 md:mr-6">Inicio</a>
            <a href="/calculadora" class="text-gray-200 font-bold text-base mb-3 md:mb-0 md:mr-6">Calculadora</a>
            <a href="/tienda" class="text-gray-200  font-bold text-base mb-3 md:mb-0 md:mr-6">Tienda</a>
            <a href="/proyectos" class="text-gray-200 font-bold text-base mb-3 md:mb-0 md:mr-6">Proyectos</a>
            <a href="/nosotros" class="text-gray-200  font-semibold text-base mb-3 md:mb-0">Nosotros</a>
          </div>
          <div class="flex justify-center md:justify-end">
            <img class="w-48 h-auto md:w-72 mb-4 md:mb-0" src={logoblanco} alt="logo" />
          </div>
          <div class="flex flex-col md:flex-row">
            <a href="/recervas" class="text-gray-200 font-bold text-base mb-3 md:mb-0 md:mr-6">Reserva una cita</a>
            <a href="/envios" class="text-gray-200 font-bold text-base mb-3 md:mb-0 md:mr-6">Envíos</a>
            <a href="/nosotros" class="text-gray-200 font-bold text-base mb-3 md:mb-0 md:mr-6">Instalación</a>
            <a href="/blog" class="text-gray-200 font-bold text-base mb-3 md:mb-0 md:mr-6">Blog</a>
            <a href="/terminos" class="text-gray-200 font-bold text-base mb-3 md:mb-0">Términos y Condiciones</a>
          </div>
        </div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 md:pt-6 flex flex-col md:flex-row justify-between items-center relative z-10">
          <p class="text-gray-200 font-medium text-center text-base mb-2 md:mb-0 md:mr-6">Jr. Cotabamba 265, Cercado de Lima</p>
          <p class="text-gray-200 font-medium text-center text-base mb-2 md:mb-0">+51 987 654 321</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Tienda;
