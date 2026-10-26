import {states,symbols} from './model.mjs';
const escape=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export function manualInventory(features){
 return [...new Set(features.map(f=>f.category))].map(category=>`<section class="manual-feature-group"><h4>${escape(category)}</h4><ul>${features.filter(f=>f.category===category).map(f=>`<li><div><a href="#${escape(f.id)}" data-manual-feature="${escape(f.id)}"><span class="feature-id">${escape(f.id)}</span> ${escape(f.name)}</a><p>${escape(f.description)}</p></div><div class="manual-feature-states">${['staging','main'].map(branch=>`<span><b>${branch}</b> <span class="${f.branches[branch].status}">${symbols[f.branches[branch].status]} ${states[f.branches[branch].status]}</span></span>`).join('')}</div></li>`).join('')}</ul></section>`).join('');
}
