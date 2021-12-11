// json -> tìm key -> xử lý key duplicate, null -> format data

let jsonData = {"logd.kernel":"false","pm.dexopt.forced-dexopt":"speed","ro.secure":"1","ro.boot.bootdevice":"155a0000.ufs","persist.radio.add_power_save":"1","init.svc.gpsd":"running","ro.ril.hsxpa":"1","gsm.sim.operator.numeric":"","ro.build.version.preview_sdk":"0","net.tcp.usercfg.default":"0","ro.build.type":"userdebug","ro.expect.recovery_id":"0xfbd0b99074981d4991c6a81e282989e2b3c30b14000000000000000000000000","persist.sys.seroriginal":"ce0616060de5981801","ro.modversion":"14.1-20210918-UNOFFICIAL-herolte","ro.boot.hardware":"samsungexynos8890","wlan.driver.status":"ok","ro.ril.gprsclass":"10","init.svc.perfprofd":"running","gsm.operator.numeric":"","init.svc.debuggerd64":"running","net.tcp.default_init_rwnd":"60","dalvik.vm.image-dex2oat-Xms":"64m","ro.cm.display.version":"14.1-20210918-UNOFFICIAL-herolte","sys.mobicoredaemon.enable":"true","media.sf.extractor-plugin":"libffmpeg_extractor.so","dalvik.vm.isa.arm64.features":"default","init.svc.sysinit":"stopped","ro.boot.warranty_bit":"1","ro.boot.fmp_config":"0","net.dns1":"192.168.88.1","ro.boot.hw_rev":"8","ro.boot.hmac_mismatch":"0","dalvik.vm.usejit":"true","ro.cm.version":"14.1-20210918-UNOFFICIAL-herolte","init.svc.bootanim":"stopped","ro.hwui.texture_cache_size":"88","ro.build.user":"root","persist.radio.multisim.config":"ss","dalvik.vm.heapsize":"512m","ro.storage_manager.enabled":"true","ro.serialno":"ce0616060de5981801","persist.sys.usb.config":"adb","dalvik.vm.heapmaxfree":"8m","dalvik.vm.heaptargetutilization":"0.75","ro.build.description":"lineage_herolte-userdebug 7.1.2 NJH47F d274caf51b test-keys","ro.cm.build.version.plat.rev":"0","ro.opengles.version":"196609","init.svc.servicemanager":"running","telephony.lteOnGsmDevice":"1","sys.usb.configfs":"0","ro.cm.build.version.plat.sdk":"7","init.svc.mobicore":"running","ro.boot.bootloader":"G930KKKU3ETD2","init.svc.lmkd":"running","net.bt.name":"Android","ro.hardware":"samsungexynos8890","ro.boot.wb.hs":"030c","sys.cm_settings_secure_version":"1","ro.hwui.text_small_cache_width":"1024","ro.boot.emmc_checksum":"3","ro.build.flavor":"lineage_herolte-userdebug","ro.multisim.simslotcount":"1","pm.dexopt.ab-ota":"speed-profile","net.dns2":"123.23.23.23","pm.dexopt.shared-apk":"speed","ro.sf.lcd_density":"560","sys.sysctl.tcp_def_init_rwnd":"60","ro.product.device":"herolte","dalvik.vm.usejitprofiles":"true","ro.bt.bdaddr_path":"\/efs\/bluetooth\/bt_addr","dalvik.vm.heapminfree":"2m","init.svc.sec-sh":"stopped","ro.wifi.channels":"","ro.mst.support":"1","ro.crypto.fuse_sdcard":"true","dalvik.vm.lockprof.threshold":"500","ro.device.cache_dir":"\/data\/cache","init.svc.ueventd":"running","qcom.bluetooth.soc":"rome","ro.boot.selinux":"enforcing","init.svc.logd":"running","keyguard.no_require_sim":"true","ro.config.alarm_alert":"Hassium.ogg","rild.libpath":"\/system\/lib64\/libsec-ril.so","ro.boot.odin_download":"1","net.tcp.usercfg.lte":"1","ro.boot.dram_info":"06,03,00,4G","net.change":"net.dns2","init.svc.installd":"running","ro.hwui.texture_cache_flushrate":"0.4","gsm.operator.isroaming":"false","ro.hwui.shape_cache_size":"4","init.svc.mediaextractor":"running","ro.allow.mock.location":"0","ro.hwui.gradient_cache_size":"2","persist.sys.dalvik.vm.lib.2":"libart.so","ro.build.version.base_os":"","init.svc.debuggerd":"running","dalvik.vm.isa.arm.variant":"cortex-a53.a57","init.svc.lhd":"running","dalvik.vm.appimageformat":"lz4","dalvik.vm.isa.arm64.variant":"generic","net.tcp.delack.lte":"8","init.svc.healthd":"running","ro.product.locale":"en-US","persist.sys.webview.vmsize":"185542064","ro.revision":"0","ro.product.cpu.abilist64":"arm64-v8a","debug.atrace.tags.enableflags":"0","security.perf_harden":"1","ro.build.tags":"test-keys","ro.nfc.port":"I2C","pm.dexopt.bg-dexopt":"speed-profile","persist.radio.apm_sim_not_pwdn":"1","ro.hwui.text_large_cache_width":"4096","init.svc.cameraserver":"running","ro.build.host":"ubuntu","ro.build.selinux":"1","ro.hwui.fbo_cache_size":"16","ro.build.date.utc":"1631953109","ro.bootmode":"unknown","ro.build.version.all_codenames":"REL","telephony.lteOnCdmaDevice":"0","wifi.interface":"wlan0","pm.dexopt.boot":"verify-profile","dalvik.vm.heapstartsize":"8m","init.svc.surfaceflinger":"running","af.fast_track_multiplier":"1","ro.hwui.text_large_cache_height":"2048","dalvik.vm.image-dex2oat-Xmx":"64m","init.svc.netd":"running","ro.cm.releasetype":"UNOFFICIAL","ro.cm.build.version":"14.1","ro.hwui.path_cache_size":"16","init.svc.adbd":"running","ro.hwui.text_small_cache_height":"1024","ro.crypto.state":"unencrypted","ro.baseband":"unknown","gsm.current.phone-type":"1","ro.config.ringtone":"Orion.ogg","ro.zygote":"zygote64_32","nfc.fw.dfl_areacode":"DEF","ril.hasisim":"0","net.tcp.delack.default":"1","debug.hwc.force_gpu":"1","ro.config.notification_sound":"Argon.ogg","ro.build.version.sdk":"25","sys.sysctl.extra_free_kbytes":"43200","dev.bootcomplete":"1","gsm.sim.operator.alpha":"","init.svc.logd-reinit":"stopped","ro.recovery_id":"0xf210af639792b51e63b0ad642575addd629a1ab2000000000000000000000000","service.bootanim.exit":"1","ril.cbd.rfs_check_done":"1","sys.boot_completed":"1","ro.product.cpu.abilist32":"armeabi-v7a,armeabi","ro.boot.serialno":"ce0616060de5981801","ro.product.cpu.abilist":"arm64-v8a,armeabi-v7a,armeabi","ro.build.version.incremental":"d274caf51b","ro.telephony.default_network":"9","ro.com.google.clientidbase":"android-samsung","ro.build.display.id":"lineage_herolte-userdebug 7.1.2 NJH47F d274caf51b test-keys","dalvik.vm.dex2oat-Xmx":"512m","rild.libpath2":"\/system\/lib64\/libsec-ril-dsds.so","ro.serialno.original":"ce0616060de5981801","init.svc.drm":"running","ro.boot.debug_level":"0x4f4c","init.svc.fingerprintd":"running","ro.debuggable":"1","init.svc.vold":"running","ro.build.version.codename":"REL","audio_hal.force_voice_config":"wide","gsm.operator.alpha":"","init.svc.media":"running","debug.hwc.otf":"1","ro.ril.telephony.mqanelements":"6","ro.product.name":"lineage_herolte","init.svc.mediadrm":"running","net.tcp.usercfg.wifi":"1","gsm.sim.state":"NOT_READY","ril.isctc":"0","sys.usb.config":"adb","nfc.fw.rfreg_display_ver":"1","dalvik.vm.stack-trace-file":"\/data\/anr\/traces.txt","debug.hwc.winupdate":"1","ro.boot.ucs_mode":"0","ro.product.cpu.abi":"arm64-v8a","sys.usb.state":"adb","ro.product.manufacturer":"samsung","ro.build.id":"NJH47F","dalvik.vm.heapgrowthlimit":"256m","ro.bootloader":"G930KKKU3ETD2","vold.has_adoptable":"1","ril.simoperator":"","init.svc.watchdogd":"running","dalvik.vm.isa.arm.features":"default","persist.sys.dun.override":"0","ro.product.model":"SM-G930F","sys.logbootcomplete":"1","ro.product.board.original":"universal8890","net.hostname":"android-2a36ca8936eae6cd","log.tag.WifiHAL":"D","init.svc.ril-daemon":"running","pm.dexopt.nsys-library":"speed","gsm.sim.operator.iso-country":"","ro.boot.sec_atd.tty":"\/dev\/ttySAC4","ro.build.product":"herolte","init.svc.zygote_secondary":"running","media.sf.omx-plugin":"libffmpeg_omx.so","init.svc.audioserver":"running","ro.dalvik.vm.native.bridge":"0","ro.telephony.ril_class":"SlteRIL","ro.build.version.release":"7.1.2","init.svc.zygote":"running","init.svc.p2p_supplicant":"running","init.svc.mediacodec":"running","ro.boot.dram_rev":"00000000","ro.sys.fw.dex2oat_thread_count":"4","ro.nfc.sec_hal":"true","ro.hwui.drop_shadow_cache_size":"6","ro.bq.gpu_to_cpu_unsupported":"1","selinux.reload_policy":"1","ro.boot.security_mode":"1526595585","ro.hwui.r_buffer_cache_size":"8","gsm.operator.iso-country":"","ril.initPB":"0","ro.sys.sdcardfs":"true","ro.board.platform.original":"exynos5","init.svc.wifiloader":"stopped","init.svc.macloader":"stopped","ro.hwui.layer_cache_size":"58","vold.post_fs_data_done":"1","pm.dexopt.install":"interpret-only","ro.build.characteristics":"default","ro.product.brand":"samsung","net.qtaguid_enabled":"1","ro.runtime.firstboot":"1638949222771","persist.sys.timezone":"America\/New_York","ro.cm.device":"herolte","net.tcp.delack.wifi":"20","init.svc.gatekeeperd":"running","ro.build.version.security_patch":"2021-04-05","nfc.fw.rfreg_ver":"18\/3\/10\/14.51.0","pm.dexopt.first-boot":"interpret-.only","ro.product.board":"universal8890","gsm.network.type":"Unknown","pm.dexopt.core-app":"speed","ro.bootimage.build.date.utc":"1631953109","dalvik.vm.dex2oat-Xms":"64m","ro.boot.ap_serial":"0x0376AC84905C","ro.carrier":"unknown","init.svc.keystore":"running","debug.force_rtl":"0","persist.sys.profiler_ms":"0"}

let deviceInfoConfig = {
  "general": {
    "ro.product.vendor.model": "Model",
    "ro.product.manufacturer": "Manufacturer",
    "ro.product.device": "Device",
    "ro.product.board": "Board",
    "ro.boot.hardware": "Hardware",
    "ro.product.vendor.brand": "Brand",
    "ro.build.version.release": "Android Version",
    "ro.build.version.sdk": "Api Level",
    "ro.bootloader": "Bootloader",
    "ro.build.id": "Build Number",
    "unknown": "Radio Version",
    "unknown": "Kernel",
    "unknown": "Android Runtime",
    "unknown": "Up Time",
  },
  "device": {
    "unknown": "Phone Type",
    "net.hostname": "Android Device ID",
    "unknown": "IMEI, MEID or ESN",
    "persist.sys.seroriginal": "Hardware Serial No.",
    "unknown": "Sim Card Serial No.",
    "unknown": "Sim Subscriber ID",
    "unknown": "IP Address",
    "unknown": "Wi-fi Mac Address",
    "unknown": "Bluetooth Mac Address",
    "unknown": "Build Fingerprint",
  },
  "cpu": {
    "unknown": "Processor",
    "ro.product.cpu.abilist": "instruction Sets",
    "unknown": "CPU Features",
    "unknown": "CPU Hardware",
    "unknown": "CPU Governor",
    "unknown": "Cores",
    "unknown": "Clock Speed"
  }
}

var deviceInfoDataGeneral = [];

function renderGeneralTab() {

}

function filterJson(json, jsonDeviceConfig) {
  Object.filter = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(predicate));

  return Object.filter(json, (keys) => {
    const gere = Object.keys(jsonDeviceConfig).filter(key => {
      return key === keys[0];
    });
    
    return keys[0] === gere[0];
  });
}

function getDeviceData(json) {
  const test = filterJson(json, deviceInfoConfig.general);
  console.log('test', Object.entries(test));

  deviceInfoDataGeneral.push(test);
}

getDeviceData(jsonData);