export declare class Token {
    token: string;
    line: number;
    static LEFT: Token;
    static RIGHT: Token;
    static add_net: Token;
    static allowed: Token;
    static angle: Token;
    static arc: Token;
    static arc_segments: Token;
    static area: Token;
    static arrow1a: Token;
    static arrow1b: Token;
    static arrow2a: Token;
    static arrow2b: Token;
    static at: Token;
    static attr: Token;
    static autoplace_cost90: Token;
    static autoplace_cost180: Token;
    static aux_axis_origin: Token;
    static blind: Token;
    static blind_buried_vias_allowed: Token;
    static bold: Token;
    static bottom: Token;
    static center: Token;
    static chamfer: Token;
    static circle: Token;
    static clearance: Token;
    static comment: Token;
    static company: Token;
    static connect: Token;
    static connect_pads: Token;
    static copperpour: Token;
    static crossbar: Token;
    static date: Token;
    static descr: Token;
    static die_length: Token;
    static dimension: Token;
    static diff_pair_width: Token;
    static diff_pair_gap: Token;
    static drawings: Token;
    static drill: Token;
    static edge: Token;
    static edge_width: Token;
    static effects: Token;
    static end: Token;
    static feature1: Token;
    static feature2: Token;
    static fill: Token;
    static fill_segments: Token;
    static filled_polygon: Token;
    static fillet: Token;
    static font: Token;
    static fp_arc: Token;
    static fp_circle: Token;
    static fp_curve: Token;
    static fp_line: Token;
    static fp_poly: Token;
    static fp_text: Token;
    static full: Token;
    static general: Token;
    static grid_origin: Token;
    static gr_arc: Token;
    static gr_circle: Token;
    static gr_curve: Token;
    static gr_line: Token;
    static gr_poly: Token;
    static gr_text: Token;
    static hatch: Token;
    static hide: Token;
    static italic: Token;
    static justify: Token;
    static keepout: Token;
    static kicad_pcb: Token;
    static last_trace_width: Token;
    static layer: Token;
    static layers: Token;
    static left: Token;
    static links: Token;
    static locked: Token;
    static micro: Token;
    static min_thickness: Token;
    static mirror: Token;
    static mod_edge_width: Token;
    static mod_text_size: Token;
    static mod_text_width: Token;
    static mode: Token;
    static model: Token;
    static module: Token;
    static net: Token;
    static net_class: Token;
    static net_name: Token;
    static nets: Token;
    static no: Token;
    static no_connects: Token;
    static none: Token;
    static not_allowed: Token;
    static np_thru_hole: Token;
    static offset: Token;
    static oval: Token;
    static pad: Token;
    static pads: Token;
    static pad_drill: Token;
    static pad_size: Token;
    static pad_to_mask_clearance: Token;
    static solder_mask_min_width: Token;
    static pad_to_paste_clearance: Token;
    static pad_to_paste_clearance_ratio: Token;
    static page: Token;
    static path: Token;
    static pcb_text_size: Token;
    static pcb_text_width: Token;
    static pcbplotparams: Token;
    static placed: Token;
    static plus: Token;
    static polygon: Token;
    static portrait: Token;
    static priority: Token;
    static pts: Token;
    static radius: Token;
    static rev: Token;
    static rect: Token;
    static rect_delta: Token;
    static reference: Token;
    static right: Token;
    static rotate: Token;
    static roundrect: Token;
    static roundrect_rratio: Token;
    static scale: Token;
    static segment: Token;
    static segment_width: Token;
    static setup: Token;
    static size: Token;
    static smd: Token;
    static smoothing: Token;
    static solder_mask_margin: Token;
    static solder_paste_margin: Token;
    static solder_paste_margin_ratio: Token;
    static solder_paste_ratio: Token;
    static start: Token;
    static status: Token;
    static tags: Token;
    static target: Token;
    static title: Token;
    static title_block: Token;
    static tedit: Token;
    static thermal_width: Token;
    static thermal_gap: Token;
    static thermal_bridge_width: Token;
    static thickness: Token;
    static top: Token;
    static trace_width: Token;
    static tracks: Token;
    static trace_min: Token;
    static trace_clearance: Token;
    static trapezoid: Token;
    static thru: Token;
    static thru_hole: Token;
    static thru_hole_only: Token;
    static tstamp: Token;
    static user: Token;
    static user_trace_width: Token;
    static user_via: Token;
    static uvia_dia: Token;
    static uvia_drill: Token;
    static uvia_min_drill: Token;
    static uvia_min_size: Token;
    static uvia_size: Token;
    static uvias_allowed: Token;
    static value: Token;
    static version: Token;
    static via: Token;
    static vias: Token;
    static via_dia: Token;
    static via_drill: Token;
    static via_min_drill: Token;
    static via_min_size: Token;
    static via_size: Token;
    static virtual: Token;
    static visible_elements: Token;
    static width: Token;
    static x: Token;
    static xy: Token;
    static xyz: Token;
    static yes: Token;
    static zone: Token;
    static zone_45_only: Token;
    static zone_clearance: Token;
    static zone_connect: Token;
    static zone_type: Token;
    static zones: Token;
    constructor(token: string, line?: number);
    is(t: Token): boolean;
    isNUMBER(): boolean;
    isSYMBOL(): boolean;
    toString(): string;
}
