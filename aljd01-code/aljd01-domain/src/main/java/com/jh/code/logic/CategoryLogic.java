package com.jh.code.logic;

import com.jh.code.CategoryRepository;
import com.jh.code.jpo.CategoryJpo;
import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;

import javax.transaction.Transactional;
import java.math.BigDecimal;
import java.util.List;

@Service
@Transactional
public class CategoryLogic {

    public final CategoryRepository repository;

    public CategoryLogic(CategoryRepository repository) {
        this.repository = repository;
    }

//    @Override
    public List<CategoryJpo> getCategoriesByParent(List<BigDecimal> categoryIdxList) {
        if (ObjectUtils.isEmpty(categoryIdxList))
            categoryIdxList.add(new BigDecimal(30));
        return this.repository.findByParentIdxInAndCatDeldateIsNull(categoryIdxList);
    }
}
